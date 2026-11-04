import Mongoose from "mongoose";
import { Feature } from "./feature.js";

export const featureMongoStore = {
  async getAllFeatures() {
    const features = await Feature.find().lean();
    return features;
  },

  async addFeature(siteId, feature) {
    const newFeature = new Feature({
      ...feature,
      siteid: siteId
    });
    const featureObj = await newFeature.save();
    return this.getFeatureById(featureObj._id);
  },

  async getFeaturesBySiteId(id) {
    const features = await Feature.find({ siteid: id }).lean();
    return features;
  },

  async getFeatureById(id) {
    if (Mongoose.isValidObjectId(id)) {
      const feature = await Feature.findOne({ _id: id }).lean();
      return feature;
    }
    return null;
  },

  async deleteFeature(id) {
    try {
      await Feature.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteAllFeatures() {
    await Feature.deleteMany({});
  },

  async updateFeature(feature, updatedFeature) {
    const featureDoc = await Feature.findOne({ _id: feature._id });
    featureDoc.title = updatedFeature.title;
    featureDoc.artist = updatedFeature.artist;
    featureDoc.duration = updatedFeature.duration;
    await featureDoc.save();
  },
};

