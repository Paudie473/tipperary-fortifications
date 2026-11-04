import { v4 } from "uuid";
import { featureMemStore } from "./feature-mem-store.js";

let sites = [];

export const siteMemStore = {
  async getAllSites() {
    return sites;
  },

  async addSite(site) {
    site._id = v4();
    sites.push(site);
    return site;
  },

  async getSiteById(id) {
    const list = sites.find((site) => site._id === id);
    list.features = await featureMemStore.getFeaturesBySiteId(list._id)
    return list
  },

  async getUserSites(userid) {
    return sites.filter((site) => site.userid === userid);
  },

  async deleteSiteById(id) {
    const index = sites.findIndex((site) => site._id === id);
    sites.splice(index, 1);
  },

  async deleteAllsites() {
    sites = [];
  },
}