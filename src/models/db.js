import { userMemStore } from "./mem/user-mem-store.js";
import { structMemStore } from "./mem/struct-mem-store.js";

export const db = {
  userStore: null,
  playlistStore: null,

  init() {
    this.userStore = userMemStore;
    this.structStore = structMemStore;
  },
};