const Accountmodel = require('../../../models/account_schema');
const twilioClient = require('./twilioClient');
const otpGenerator = require('otp-generator');
const bcrypt = require('bcrypt');

// Generate and send OTP
exports.requestPasswordReset = async (req, res) => {
    try {
        const { email } = req.body;

        // Find user by email
        const user = await Accountmodel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Generate OTP (6 digits, numeric)
        const otp = otpGenerator.generate(6, {
            digits: true,
            lowerCaseAlphabets: false,
            upperCaseAlphabets: false,
            specialChars: false
        });

        // Set OTP expiration (5 minutes from now)
        const otpExpires = new Date(Date.now() + 5 * 60 * 1000);

        // Save OTP and expiration to user document
        user.resetPasswordOTP = otp;
        user.resetPasswordOTPExpires = otpExpires;
        await user.save();

        // Send OTP via SMS
        try {
            await twilioClient.messages.create({
                body: `Your password reset OTP is: ${otp}. Valid for 5 minutes.`,
                from: process.env.TWILIO_PHONE_NUMBER,
                to: user.phone,

            });
        } catch (smsError) {
            console.error('SMS sending failed:', {
                error: smsError.message,
                code: smsError.code,
                stack: smsError.stack
            });
            return res.status(500).json({ message: 'Failed to send OTP' });
        }

        res.status(200).json({ 
            message: 'OTP sent successfully',
            // In production, don't send OTP back in response
            // This is just for testing
            otp: process.env.NODE_ENV === 'development' ? otp : undefined
        });

    } catch (error) {
        console.error('Error in requestPasswordReset:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Verify OTP and reset password
exports.resetPassword = async (req, res) => {
    try {
        const { email, otp, newPassword } = req.body;

        // Find user by email and check OTP
        const user = await Accountmodel.findOne({ 
            email,
            resetPasswordOTP: otp,
            resetPasswordOTPExpires: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({ 
                message: 'Invalid OTP or OTP has expired' 
            });
        }

        // Hash new password
        const hashedPassword = await bcrypt.hash(newPassword, 12);

        // Update password and clear OTP fields
        user.password = hashedPassword;
        user.resetPasswordOTP = undefined;
        user.resetPasswordOTPExpires = undefined;
        await user.save();

        res.status(200).json({ message: 'Password reset successfully' });

    } catch (error) {
        console.error('Error in resetPassword:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
