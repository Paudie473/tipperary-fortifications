import { userMemStore } from "./mem/user-mem-store.js";
import { siteMemStore } from "./mem/site-mem-store.js";
import { featureMemStore } from "./mem/feature-mem-store.js";

export const db = {
  userStore: null,
  playlistStore: null,

  init() {
    this.userStore = userMemStore;
    this.siteStore = siteMemStore;
    this.featureStore = featureMemStore;
  },
};