import Mongoose from "mongoose";

const { Schema } = Mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  // Role is introduced to separate standard users from admin. Users created from the standard site will always be created as "user"
  role: String,
});

export const User = Mongoose.model("User", userSchema);