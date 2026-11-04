import Mongoose from "mongoose";

const { Schema } = Mongoose;

const featureSchema = new Schema({
  featureType: String,
  description: String,
  siteid: {
    type: Schema.Types.ObjectId,
    ref: "Site",
  },
});

export const Feature = Mongoose.model("Feature", featureSchema);