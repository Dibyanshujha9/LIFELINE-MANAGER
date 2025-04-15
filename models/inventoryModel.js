const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema(
  {
    // this is for tracking the type of inventory 
    inventoryType: {
      type: String,
      required: [true, "inventory type require"],
      enum: ["in", "out"], //enum is used for taking multiple value here
    },

// this is for the blood group 
    bloodGroup: {
      type: String,
      required: [true, "blood group is require"],
      enum: ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"],
    },

// this is fot the quantity of blood tracking 
    quantity: {
      type: Number,
      require: [true, "blood quanity is require"],
    },

    // this is for tracking the email 
    email: {
      type: String,
      required: [true, "Donar Email is Required"],
    },

// this is for the donar email 
email:{
  type:String,
  require:[true,'Donar Email is Required']
},

// this is for tracking the organization 
    organisation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: [true, "organisation is require"],
    },


    // this is for tracking hospital 
    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: function () {
        return this.inventoryType === "out";
      },
    },

    // this is for tracking the donar 
    donar: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: function () {
        return this.inventoryType === "in";
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inventory", inventorySchema);