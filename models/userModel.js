const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
// this is for the role field 
role:{
type: String,
required: [true,"role is required"],
enum:['admin','organisation','donar','hospital'] //enum is used for taking multiple value here
},

// this is for the name field 
name:{
    type: String,
required: function(){
    if(this.role === 'donar' || this.role === 'admin'){
        return true;
    }
    return false;    
}
},

// this is for the organization name 
organisationName:{
    type: String,
    required: function(){
        if(this.role === 'organisation'){
            return false;
        }
        return false;    
    }
},

// this is for the hospital name field 
hospitalName:{
    type: String,
    required: function(){
        if(this.role === 'hospital'){
            return true;
        }
        return false;    
    }
},

    // this is for the email field 
    email:{
type: String,
required: [true,"email is required"],
unique: true,
    },

    // this is for the password field 
    password:{
        type: String,
        required: [true,"password is required"],
            },

    // this is for the website field 
    website:{
        type: String,
    },

//  this is for the address field 
address:{
    type: String,
    required: [true,"address is required"],
        },   

// this is for the phone string 
phone: {
    type: String,
    required: [false, "phone is required"]
}
}, { timestamps: true }); //time stamp is used for tracking time 


module.exports = mongoose.model("users",userSchema);