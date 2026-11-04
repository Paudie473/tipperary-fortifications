import { db } from "../models/db.js";
import { SiteSpec } from "../models/joi-schemas.js";

export const addSiteController = {
  index: {
    handler: async function (request, h) {
      return h.view("add-site-page");
    },
  },

  addSite: {
    validate: {
      payload: SiteSpec,
      options: { abortEarly: false },
      failAction: async function (request, h, error) {
        return h.view("add-site-page", { title: "Error adding site", errors: error.details }).takeover().code(400);
      },
    },
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