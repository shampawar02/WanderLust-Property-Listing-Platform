const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn,isOwner,validateListing} = require("../middleware.js");
const { populate } = require("../models/user.js");

const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage: storage });
const listingController = require("../controllers/listing.js");


//Index route
router.get("/",wrapAsync(listingController.index));

//New Route
router.get("/new",isLoggedIn ,listingController.renderNewForm) ;

// Show Route
router.get("/:id",wrapAsync(listingController.showListing));

//Create route for new listing
router.post("/",isLoggedIn, 
    validateListing, 
    upload.single("listing[image][url]"),
    wrapAsync(listingController.createListing));

//edit route 
router.get("/:id/edit",isLoggedIn, isOwner,wrapAsync(listingController.renderEditForm));

// update route
router.put("/:id",isLoggedIn,isOwner , 
    upload.single("listing[image][url]"),
    validateListing,
    wrapAsync(listingController.updateListing));

// delete route 
router.delete("/:id",isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));


module.exports = router;