// const express = require('express')
// const authMiddelware = requir../middlewares/authMiddelwaresare')
// const router = express.Router()
// const { createInventoryController , getInventoryController } = require('../controllers/inventoryController');
// const authMiddleware = requir../middlewares/authMiddelwaresare');

// // routes 
// // ADD INVENTORY || POST 
// router.post('/create-inventory',authMiddelware,createInventoryController);

// // GET ALL BLOOD RECORDS 
// router.get('/get-inventory',authMiddleware,getInventoryController)

// module.exports = router 

const express = require("express");
const authMiddelware = require("../middlewares/authMiddelwares");
const router = express.Router();
const {
    createInventoryController,
    getInventoryController,
    getDonarsController,
    getHospitalController,
    getOrgnaisationController,
    getOrgnaisationForHospitalController,
    getInventoryHospitalController,
    getRecentInventoryController,
  } = require("../controllers/inventoryController");

// ADD INVENTORY || POST
router.post("/create-inventory", authMiddelware , createInventoryController);

//GET ALL BLOOD RECORDS
router.get("/get-inventory", authMiddelware , getInventoryController);

//GET ALL DONAR RECORDS
router.get("/get-donars", authMiddelware , getDonarsController);

//GET ALL DONAR RECORDS
router.get("/get-hospitals", authMiddelware , getHospitalController);

//GET ALL ORGANISATION RECORDS
router.get("/get-orgnaisation", authMiddelware , getOrgnaisationController);

//GET ALL ORGANISATION RECORDS
router.get("/get-orgnaisation-for-hospital", authMiddelware , getOrgnaisationForHospitalController);

//GET HOSPITAL BLOOD RECORDS
router.post("/get-inventory-hospital", authMiddelware , getInventoryHospitalController);

//GET RECENT OF 3 BLOOD RECORDS
router.get("/get-recent-inventory",authMiddelware,getRecentInventoryController);

module.exports = router;
