import { v4 } from "uuid";

let features = [];

export const featureMemStore = {
  async getAllFeatures() {
    return features;
  },

  async addFeature(siteId, feature) {
    feature._id = v4();
    feature.siteid = siteId;
    features.push(feature);
    return feature;
  },

  async getFeaturesBySiteId(id) {
    let list = features.filter((feature) => feature.siteid === id);
    if (list === undefined) list = null;
    return list;
  },

  async getFeatureById(id) {
    let item = features.find((feature) => feature._id === id);
    if (item === undefined) item = null;
    return item;
  },

  async deleteFeature(id) {
    const index = features.findIndex((feature) => feature._id === id);
    if (index !== -1) features.splice(index, 1);
  },

  async deleteAllFeatures() {
    features = [];
  },

  async updateFeature(feature, updatedFeature) {
    feature.title = updatedFeature.title;
    feature.artist = updatedFeature.artist;
    feature.duration = updatedFeature.duration;
  },
};