// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
// // this is for the role field 
// role:{
// type: String,
// required: [true,"role is required"],
// enum:['admin','organisation','donar','hospital'] //enum is used for taking multiple value here
// },

// // this is for the name field 
// name:{
//     type: String,
// required: function(){
//     if(this.role === 'donar' || this.role === 'admin'){
//         return true;
//     }
//     return false;    
// }
// },

// // this is for the organization name 
// organisationName:{
//     type: String,
//     required: function(){
//         if(this.role === 'organisation'){
//             return false;
//         }
//         return false;    
//     }
// },

// // this is for the hospital name field 
// hospitalName:{
//     type: String,
//     required: function(){
//         if(this.role === 'hospital'){
//             return true;
//         }
//         return false;    
//     }
// },

//     // this is for the email field 
//     email:{
// type: String,
// required: [true,"email is required"],
// unique: true,
//     },

//     // this is for the password field 
//     password:{
//         type: String,
//         required: [true,"password is required"],
//             },

//     // this is for the website field 
//     website:{
//         type: String,
//         required: [false, "phone is required"]
//     },

// //  this is for the address field 
// address:{
//     type: String,
//     required: [true,"address is required"],
//         },   


// // this is for the phone string 
// phone: {
//     type: String,
//     required: [false, "phone is required"]
// }
// }, { timestamps: true }); //time stamp is used for tracking time 


// module.exports = mongoose.model("users",userSchema);


const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // Role field
  role: {
    type: String,
    required: [true, "Role is required"],
    enum: ['admin', 'organisation', 'donar', 'hospital'] // Enum for multiple values
  },

  // Name field
  name: {
    type: String,
    required: function() {
      return this.role === 'donar' || this.role === 'admin';  // Required for 'donar' or 'admin'
    }
  },

  // Organisation Name
  organisationName: {
    type: String,
    required: function() {
      return this.role === 'organisation';  // Required only for 'organisation' role
    }
  },

  // Hospital Name
  hospitalName: {
    type: String,
    required: function() {
      return this.role === 'hospital';  // Required only for 'hospital' role
    }
  },

  // Email field
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true
  },

  // Password field
  password: {
    type: String,
    required: [true, "Password is required"]
  },

  // Website field
  website: {
    type: String,
    required: false  // Not required
  },

  // Address field
  address: {
    type: String,
    required: [true, "Address is required"]
  },

  // Phone field
  phone: {
    type: String,
    required: false  // Not required
  }
}, { timestamps: true }); // Timestamp for tracking creation/updation time

module.exports = mongoose.model("users", userSchema);
