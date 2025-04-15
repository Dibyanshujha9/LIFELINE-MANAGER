const userModel = require("../models/userModel");

module.exports = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.body.userId);
        // check admin things 
        if (user?.role !== "admin") {
            return res.status(401).json({
                success: false,
                message: "Unauthorized Access",
            });
        } else {
            next();
        }
    } catch (error) {
        console.log(error);  // Fixed typo from console.loh
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};
