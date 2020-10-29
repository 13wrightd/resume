// Mongoose schema and model definitions
const mongoose = require("mongoose")
const Schema = mongoose.Schema;
// Create the schema for the Account database
const userSchema = new Schema({
  id: { type: String, required: true, unique: true },  
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: false },
  created_on: { type: Date, default: Date.now, required: false, unique: false },
  updated_on: { type: Date, required: false, unique: false },
});

userSchema.pre('save', function(next){
  if(!this.updated_on){
    this.updated_on = this.created_on
  }
  else{
    this.updated_on = Date.now();
  }
  
  next();
});

// Create a model for the schema
const User = mongoose.model("User", userSchema);
module.exports = User;