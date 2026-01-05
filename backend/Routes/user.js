const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const { generateToken } = require("../middleware/checkAuth");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.SECRET_KEY, // Click 'View API Keys' above to copy your API secret
});

router.post("/signup", async (req, res) => {
  try {
    // console.log('hellow')
    const users = await User.find({ email: req.body.email });
    if (users.length > 0) {
      return res.status(500).json({
        error: "email already registered",
      });
    }
    const uploadedImage = await cloudinary.uploader.upload(
      req.files.photo.tempFilePath
    );
    // console.log(uploadedImage)
    const hashCode = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      fullName: req.body.fullName,

      email: req.body.email,
      phone: req.body.phone,
      logoUrl: uploadedImage.secure_url,
      logoId: uploadedImage.public_id,
      password: hashCode,
    });
    const data = await user.save();
    res.status(200).json({
      newuser: data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
});

module.exports = router;
