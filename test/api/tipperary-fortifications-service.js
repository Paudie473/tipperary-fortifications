import axios from "axios";

import { serviceUrl } from "../fixtures.js";

export const tipperaryFortificationsService = {
  tipperaryFortificationsUrl: serviceUrl,

  async createUser(user) {
    const res = await axios.post(`${this.tipperaryFortificationsUrl}/api/users`, user);
    return res.data;
  },

  async getUser(id) {
    const res = await axios.get(`${this.tipperaryFortificationsUrl}/api/users/${id}`);
    return res.data;
  },

  async getAllUsers() {
    const res = await axios.get(`${this.tipperaryFortificationsUrl}/api/users`);
    return res.data;
  },

  async deleteAllUsers() {
    const res = await axios.delete(`${this.tipperaryFortificationsUrl}/api/users`);
    return res.data;
  },

  async createSite(site) {
    const res = await axios.post(`${this.tipperaryFortificationsUrl}/api/sites`, site);
    return res.data;
  },

  async deleteAllSites() {
    const res = await axios.delete(`${this.tipperaryFortificationsUrl}/api/sites`);
    return res.data;
  },

  async deleteSite(id) {
    const res = await axios.delete(`${this.tipperaryFortificationsUrl}/api/sites/${id}`);
    return res;
  },

  async getAllSites() {
    const res = await axios.get(`${this.tipperaryFortificationsUrl}/api/sites`);
    return res.data;
  },

  async getSite(id) {
    const res = await axios.get(`${this.tipperaryFortificationsUrl}/api/sites/${id}`);
    return res.data;
  },

    async createFeature(siteId, feature) {
    const res = await axios.post(`${this.tipperaryFortificationsUrl}/api/sites/${siteId}/features`, feature);
    return res.data;
  },

  async deleteAllFeatures() {
    const res = await axios.delete(`${this.tipperaryFortificationsUrl}/api/features`);
    return res.data;
  },

  async deleteFeature(id) {
    const res = await axios.delete(`${this.tipperaryFortificationsUrl}/api/features/${id}`);
    return res;
  },

  async getAllFeatures() {
    const res = await axios.get(`${this.tipperaryFortificationsUrl}/api/features`);
    return res.data;
  },

  async getFeature(id) {
    const res = await axios.get(`${this.tipperaryFortificationsUrl}/api/features/${id}`);
    return res.data;
  },
};