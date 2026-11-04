import { v4 } from "uuid";

let features = [];

export const featureMemStore = {
  async getAllFeatures() {
    return features;
  },

  async addFeature(playlistId, feature) {
    feature._id = v4();
    feature.playlistid = playlistId;
    features.push(feature);
    return feature;
  },

  async getFeaturesBySiteId(id) {
    let list = features.filter((feature) => feature.playlistid === id);
    if (list == undefined) list = null;
    return list;
  },

  async getFeatureById(id) {
    let feature = features.find((feature) => feature._id === id);
    if (feature == undefined) feature = null;
    return feature;
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