const mongoose = require('mongoose');
const UserModle=require('../models/user')

const asyncHandler = require("express-async-handler");
bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const AddUser = asyncHandler(async (req, res, next) => {
    let data = req.body;
  
    try {
        console.log("try")
      const newUser = new UserModle(data);
      const savedUser = await newUser.save();
      // res.status(200).json({ Done: true });
      console.log("true");
      const token = jwt.sign(
        {
          email: newUser.email,
          id: newUser._id,
          first_name: newUser.first_name,
  
        },
        "PrivateSecret123",
        { expiresIn: "3h" }
       
      );
      console.log(token);
  
      res.status(200).json({ token, message: "signup success" });
      return savedUser;
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });
  module.exports = {
    AddUser
  }
  