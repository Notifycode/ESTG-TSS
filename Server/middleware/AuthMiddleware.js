// Middleware to ensure user is authenticated
exports.ensureAuthenticated = (req, res, next) => {
    if (req.session.Userid) {
        next();
    } else {
        res.status(403).json({message:"Unauthorized to this api"});
    }
};


// Middleware to ensure user is authenticated
exports.ensureAdminprivellege = (req, res, next) => {
    if (req.session.role === "Admin") {
        next();
    } else {
        res.status(403).json({message:"Unauthorized to this api"});
    }
};
