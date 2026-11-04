import { db } from "../models/db.js";

export const addSiteController = {
  index: {
    handler: async function (request, h) {
      return h.view("add-site-page");
    },
  },

  addSite: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const newSite = {
        name: request.payload.name,
        address: request.payload.address,
        type: request.payload.type,
        lat: Number(request.payload.lat),
        long: Number(request.payload.long),
        description: request.payload.description,
        userid: loggedInUser._id,
      };
      await db.siteStore.addSite(newSite);
      return h.redirect("/dashboard");
    },
  },
};