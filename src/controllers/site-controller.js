import { db } from "../models/db.js";

export const siteController = {
  index: {
    handler: async function (request, h) {
      const site = await db.siteStore.getSiteById(request.params.id);
      const viewData = {
        title: "Site Information",
        site: site,
      };
      return h.view("site", viewData);
    },
  },

  addFeature: {
    handler: async function (request, h) {
      const site = await db.siteStore.getSiteById(request.params.id);
      const newFeature = {
        name: request.payload.name,
        description: request.payload.description,
      };
      await db.featureStore.addFeature(site._id, newFeature);
      return h.redirect(`/site/${site._id}`);
    },
  },

  deleteFeature: {
    handler: async function(request, h) {
      const site = await db.siteStore.getSiteById(request.params.id);
      await db.featureStore.deleteFeature(request.params.featureid);
      return h.redirect(`/site/${site._id}`);
    },
  },
};