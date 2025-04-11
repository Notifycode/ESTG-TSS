const express = require('express');
const router = express.Router();
const Admincontroller = require("../controller/Account/AdminController");
const creatorcontroller = require("../controller/Account/Creatorcontroller")
const Logoutcontroller = require("../controller/Account/logout")
const dashboardcontroller = require("../controller/Account/Dashboard")
const Updateprofilecontroller = require("../controller/Account/Updateprofile")
const Authmiddleware = require("../middleware/AuthMiddleware")
const forgetpasswordcontroller = require("../controller/Account/Forget-password/otpController")


router.post("/admin/register",Admincontroller.adminsignup)
router.post("/creator/register",Authmiddleware.ensureAdminprivellege,creatorcontroller.creatorsignup)
router.post("/creator/login",creatorcontroller.creatorlogin)
router.post("/admin/login",Admincontroller.adminlogin)
router.put("/updateprofile",Updateprofilecontroller.update)
router.get("/dashboard",dashboardcontroller.dashboard)
router.get("/logout", Logoutcontroller.logout);
// Request password reset OTP
router.post('/forgot-password', forgetpasswordcontroller.requestPasswordReset);

// Reset password with OTP
router.post('/reset-password', forgetpasswordcontroller.resetPassword);
module.exports = router;