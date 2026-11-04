import { userMemStore } from "./mem/user-mem-store.js";
import { siteMemStore } from "./mem/site-mem-store.js";
import { featureMemStore } from "./mem/feature-mem-store.js";

import { userJsonStore } from "./json/user-json-store.js";
import { siteJsonStore } from "./json/site-json-store.js";
import { featureJsonStore } from "./json/feature-json-store.js";

export const db = {
  userStore: null,
  playlistStore: null,
  featureStore: null,

  init(storeType) {
    switch (storeType) {
      case "json":
        this.userStore = userJsonStore;
        this.siteStore = siteJsonStore;
        this.featureStore = featureJsonStore;
        break;
      default:
        this.userStore = userMemStore;
        this.siteStore = siteMemStore;
        this.featureStore = featureMemStore;
    }
  },
};