const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// register callback 
// const registerController = async (req , res )=>{
// try {
//     const existingUser = await userModel.findOne({email:req.body.email})
// //  validation
// if(existingUser){
//     return res.status(200).send({
//         success:false,
//         message:'User Already Exists'
//     })
// }
// // hassing of the password 
// const salt = await bcrypt.genSalt(10)
// const hashedPassword = await bcrypt.hash(req.body.password,salt)
// req.body.password = hashedPassword 

// // rest data 
// const user = new userModel(req.body) //Making new users 
// await user.save() // Saving new user here 
// return res.status(201).send({
//   success : true,
//   message : 'User Registered Successfully' ,
//   user
// })

 

// } catch (error) {
//     console.log(error)
//     res.status(500).send({
//         success:false,
//         message:'Error in the Registered API',
//         error
//     })
// }
// }
const registerController = async (req, res) => {
    try {
      const exisitingUser = await userModel.findOne({ email: req.body.email });
      //validation
      if (exisitingUser) {
        return res.status(200).send({
          success: false,
          message: "User ALready exists",
        });
      }
      //hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      req.body.password = hashedPassword;
      //rest data
      const user = new userModel(req.body);
      await user.save();
      return res.status(201).send({
        success: true,
        message: "User Registerd Successfully",
        user,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error In Register API",
        error,
      });
    }
  };

// login call back 
const loginController = async(req,res) =>{
try {
    // extra check i am adding -> if there exist email password 
    if (!req.body.email || !req.body.password) {
        return res.status(400).send({
            success: false,
            message: 'Email and Password are required',
        });
    }

    const user = await userModel.findOne({email:req.body.email})
    if(!user){
        return res.status(404).send({
            success:false,
            message:'Invalid Credentials'
        })
    }

    // check role 
// if(user.role !== req.body.role){
//     return res.status(500).send({
//         success:false,
//         message:"Role Not Matched"
//     })
// }
// Ensure both roles exist before comparison
console.log("User Role from DB:", user.role);
console.log("Role from Frontend:", req.body.role);
if (!user.role || !req.body.role || user.role.toLowerCase() !== req.body.role.toLowerCase()) {
    return res.status(500).send({
        success: false,
        message: "Role Not Matched"
    });
}


    // compare the password 
    const comparePassword = await bcrypt.compare(req.body.password,user.password)
    if(!comparePassword){
        return res.status(401).send({
            success:false,
            message:'Invalid Credentials'
        })
    }
    // Token handling 
const token = jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})
return res.status(200).send({
    success:true,
    message:'Login Successfully',
    token,
    user
})
} 
catch (error) {
    console.log(error)
    res.status(500).send({
        success:false,
        message:'Error in Login API',
        error 
    })
}
};

//GET CURRENT USER || GET
const currentUserController = async(req,res) =>{
try {
        const user = await userModel.findOne({_id: req.body.userId});
        return res.status(200).send({
            success : true,
            message:"User Fetched Successfully",
            user,
        })
} catch (error) {
    console.log(error)
    return res.status(500).send({
        success:false,
        message:'Unable to get current user',
        error
    })
}
}

module.exports = {registerController ,  loginController , currentUserController};