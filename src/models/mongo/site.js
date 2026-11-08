import Mongoose from "mongoose";

const { Schema } = Mongoose;

const siteSchema = new Schema({
  name: String,
  address: String,
  type: String,
  lattitude: Number,
  longitude: Number,
  description: String,
  img: String,
  userid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Site = Mongoose.model("Site", siteSchema);