const userModel = require('../models/userModel');
const inventoryModel = require('../models/inventoryModel'); 
const mongoose = require("mongoose");

// controller for the inventory 
const createInventoryController = async (req,res) =>{
    // here write the logic for the controller 
    try {
        const {email} = req.body
        // validation 
const user = await userModel.findOne({email})
if(!user){
    return res.status(404).json({ error: "User not found" });
}
// if(inventoryType === "in" && user.role !== 'donar' ){
//   return res.status(404).json({ error: "User not found" });
// }
// if(inventoryType === "out" && user.role !== 'hospital' ){
//     return res.status(404).json({ error: "Not a hospital" });
// }

if (req.body.inventoryType == "out") {
    const requestedBloodGroup = req.body.bloodGroup;
    const requestedQuantityOfBlood = req.body.quantity;
    const organisation = new mongoose.Types.ObjectId(req.body.userId);
    //calculate Blood Quanitity
    const totalInOfRequestedBlood = await inventoryModel.aggregate([
      {
        $match: {
          organisation,
          inventoryType: "in",
          bloodGroup: requestedBloodGroup,
        },
      },
      {
        $group: {
          _id: "$bloodGroup",
          total: { $sum: "$quantity" },
        },
      },
    ]);
    const totalIn = totalInOfRequestedBlood[0]?.total || 0;


    const totalOutOfRequestedBloodGroup = await inventoryModel.aggregate([
        {
          $match: {
            organisation,
            inventoryType: "out",
            bloodGroup: requestedBloodGroup,
          },
        },
        {
          $group: {
            _id: "$bloodGroup",
            total: { $sum: "$quantity" },
          },
        },
      ]);
      const totalOut = totalOutOfRequestedBloodGroup[0]?.total || 0;


     //in & Out Calc
     const availableQuanityOfBloodGroup = totalIn - totalOut;
     //quantity validation
     if (availableQuanityOfBloodGroup < requestedQuantityOfBlood) {
       return res.status(500).send({
         success: false,
         message: `Only ${availableQuanityOfBloodGroup}ML of ${requestedBloodGroup.toUpperCase()} is available`,
       });
     }
     req.body.hospital = user?._id;
   } else {
     req.body.donar = user?._id;


   }




// saves 
const inventory = new inventoryModel(req.body);
await inventory.save();
return res.status(201).send({
    success:true,
    message: "New Blood Record Added",
})

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'Error in  creating the Inventory APIS',
            error 
        })
    }
}

// controller for GET ALL BLOD RECORDS 
const getInventoryController = async (req , res) =>{
try {
    const inventory = await inventoryModel.find({
        organisation : req.body.userId,
    })
    .populate("donar") //its ability to optimize data retrieval
    .populate("hospital")
    .sort({createdAt: -1}); // -1 here i have used to filter the data , newest at the top 

    return res.status(200).send({
        success:true,
        message:"get all records successfully",
        inventory,
    });
} catch (error) {
   console.log(error);
 return res.status(500).send({
success:false,
message:"Unable to get the Blood records from Blood Inventory",
error 
   });
}
}


// GET DONARS 
const getDonarsController = async (req , res ) => {
    try {
        const organisation = req.body.userId;
        // find donar 
        const donarId = await inventoryModel.distinct("donar",{
          organisation
        });
        // console.log(donarId); 
const donars = await userModel.find({_id:{$in : donarId }});
return res.status(200).send({
  success : true,
  message: "Donar Record Fetched Successfully",
  donars, 
})
    } catch (error) {
        console.log(error)
        return res.status(500).send({
          success:false,
          message:'Error in the Donar Records',
          error
        })
    }
};

// GET HOSPITALS 
const getHospitalController = async(req , res) => {
  try {
const organisation = req.body.userId;
// GET HOSPITAL ID 
const hospitalId = await userModel.find({
  _id: {$in: hospitalId},
});
return res.status(200).send({
  success:true,
  message: "Hospital Data Fetched Successfully",
  hospitals,
});
  } catch (error) {
   console.log(error)
   return res.status(500).send({
    success:false,
    message:"Error in get Hospital Apis",
    error
   }) 
  }
}

// GET ORG PROFILES 
const getOrgnaisationController = async(req , res) => {
  try {
    const donar = req.body.userId;
    const orgId = await inventoryModel.distinct('organisation',{donar});
    // find org 
const organisations = await userModel.find({
  _id: {$in:orgId},
});
return res.status(200).send({
    success: true,
    message: "Org Data Fetched Successfully",
    organisations,
});
  } catch (error) {
   console.log(error)
   return res.status(500).send({
    success:false,
    message:'Error in the Org API',
    error
   }) 
  }
}

// GET ORG for Hospital
const getOrgnaisationForHospitalController = async (req, res) => {
  try {
    const hospital = req.body.userId;
    const orgId = await inventoryModel.distinct("organisation", { hospital });
    //find org
    const organisations = await userModel.find({
      _id: { $in: orgId },
    });
    return res.status(200).send({
      success: true,
      message: "Hospital Org Data Fetched Successfully",
      organisations,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Hospital ORG API",
      error,
    });
  }
};

// GET HOSPITAL BLOOD RECORDS 
const getInventoryHospitalController = async (req, res) => {
  try {
    const inventory = await inventoryModel
      .find(req.body.filters)
      .populate("donar")
      .populate("hospital")
      .populate("organisation")
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      messaage: "get hospital comsumer records successfully",
      inventory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Get consumer Inventory",
      error,
    });
  }
};

// GET BLOOD RECORD OF ONLY RECENT 3
const getRecentInventoryController = async (req, res) => {
  try {
    const inventory = await inventoryModel
      .find({
        organisation: req.body.userId,
      })
      .limit(3)
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      message: "recent Invenotry Data",
      inventory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Recent Inventory API",
      error,
    });
  }
};


module.exports = {
createInventoryController,
getInventoryController,
getDonarsController,
getHospitalController,
getOrgnaisationController,
getOrgnaisationForHospitalController,
getInventoryHospitalController,
getRecentInventoryController,
};