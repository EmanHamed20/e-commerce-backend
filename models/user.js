const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

 const UserSchema=mongoose.Schema({
firstName: {
    type: "string",
  },
  lastName: {
    type: "string",
  },
 
  email:{
    type: "string",
    required: true

},
password: {
  type: "string",
  required: true
},  
phoneNumber:{
    type: "number",

},
})
UserSchema.pre("save", function(next) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(this.password, salt);
    this.password = hash;
    next();
  });
  
  
  const collectionName = 'User';
  
  const UserModle = mongoose.model("User", UserSchema,collectionName);
  module.exports =UserModle ;
  