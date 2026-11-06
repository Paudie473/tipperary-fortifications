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
    let item = sites.find((site) => site._id === id);
    if (item) {
      item.features = await featureMemStore.getFeaturesBySiteId(item._id)
    } else {
      item = null;
    }
    return item;
  },

  async getUserSites(userid) {
    list = sites.filter((site) => site.userid === userid);
    if (list === undefined) list = null;
    return list;
  },

  async deleteSiteById(id) {
    const index = sites.findIndex((site) => site._id === id);
    if (index !== -1) sites.splice(index, 1);
  },

  async deleteAllSites() {
    sites = [];
  },
}