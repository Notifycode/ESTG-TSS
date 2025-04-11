const twilio = require('twilio');

const accountSid = "AC9790cce46f49ff0ec390ec76ab3fc218";
const authToken = "bb797d1aeb750af1c782327a5894d991";
const twilioPhoneNumber = "+1 947 221 4780";

module.exports = twilio(accountSid, authToken);


// TWILIO_ACCOUNT_SID="AC9790cce46f49ff0ec390ec76ab3fc218"
// TWILIO_AUTH_TOKEN="bb797d1aeb750af1c782327a5894d991"
// TWILIO_PHONE_NUMBER="+1 947 221 4780"