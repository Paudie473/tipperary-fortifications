import { v4 } from "uuid";
import { db } from "./store-utils.js";

export const featureJsonStore = {
  async getAllFeatures() {
    await db.read();
    return db.data.features;
  },

  async addFeature(siteId, feature) {
    await db.read();
    feature._id = v4();
    feature.siteid = siteId;
    db.data.features.push(feature);
    await db.write();
    return feature;
  },

  async getFeaturesBySiteId(id) {
    await db.read();
    let list = db.data.features.filter((feature) => feature.siteid === id);
    if (!list) {
      list = null;
    }
    return list;
  },

  async getFeatureById(id) {
    await db.read();
    let list = db.data.features.find((feature) => feature._id === id);
    if (!list) {
      list = null;
    }
    return list;
  },

  async deleteFeature(id) {
    await db.read();
    const index = db.data.features.findIndex((feature) => feature._id === id);
    if (index !== -1) db.data.features.splice(index, 1);
    await db.write();
  },

  async deleteAllFeatures() {
    db.data.features = [];
    await db.write();
  },

  async updateFeature(feature, updatedFeature) {
    feature.title = updatedFeature.title;
    feature.artist = updatedFeature.artist;
    feature.duration = updatedFeature.duration;
    await db.write();
  },
};