import { v4 } from "uuid";
import { db } from "./store-utils.js";
import { featureJsonStore } from "./feature-json-store.js";

export const siteJsonStore = {
  async getAllSites() {
    await db.read();
    return db.data.sites;
  },

  async addSite(site) {
    await db.read();
    site._id = v4();
    db.data.sites.push(site);
    await db.write();
    return site;
  },

  async getSiteById(id) {
    await db.read();
    let list = db.data.sites.find((site) => site._id === id);
    if (list) {
      list.features = await featureJsonStore.getFeaturesBySiteId(list._id);
    } else {
      list = null;
    }
    return list;
  },

  async getUserSites(userid) {
    await db.read();
    let list = db.data.sites.filter((site) => site.userid === userid);
    if (list === undefined) list = null;
    return list
  },

  async deleteSiteById(id) {
    await db.read();
    const index = db.data.sites.findIndex((site) => site._id === id);
    if (index !== -1) db.data.sites.splice(index, 1);
    await db.write();
  },

  async deleteAllSites() {
    db.data.sites = [];
    await db.write();
  },
};