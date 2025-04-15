const JWT = require('jsonwebtoken')

// here in middleware we have also NEXT 
// this is the middleware for the authentication for procted routes
module.exports = async(req,res,next) =>{
try {
    const token = req.headers['authorization'].split(" ")[1] //bearer token 
    JWT.verify(token,process.env.JWT_SECRET,(err,decode)=>{
        if (err) {
            return res.status(401).send({
                success:false,
                message:"Auth Failed",
            })
        } else {
          req.body.userId = decode.userId;
          next();  
        }
    })
} catch (error) {
    console.log(error)
    return res.status(401).send({
        success:false,
        error,
        message:'Auth Failed'
    })
}
}

