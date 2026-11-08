import { db } from "../models/db.js";
import { FeatureSpec } from "../models/joi-schemas.js";
import { imageStore } from "../models/image-store.js";

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
    validate: {
      payload: FeatureSpec,
      options: { abortEarly: false },
      failAction: async function (request, h, error) {
        const site = await db.siteStore.getSiteById(request.params.id);
        return h.view("site", { title: "Error adding feature", site, errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const site = await db.siteStore.getSiteById(request.params.id);
      const newFeature = {
        featureType: request.payload.featureType,
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

  uploadImage: {
    handler: async function (request, h) {
      try {
        const site = await db.siteStore.getSiteById(request.params.id);
        const file = request.payload.imagefile;
        if (Object.keys(file).length > 0) {
          const url = await imageStore.uploadImage(request.payload.imagefile);
          site.img = url;
          await db.siteStore.updateSite(site);
        }
        return h.redirect(`/site/${site._id}`);
      } catch (err) {
        console.log(err);
        return h.redirect(`/site/${site._id}`);
      }
    },
    payload: {
      multipart: true,
      output: "data",
      maxBytes: 209715200,
      parse: true,
    },
  },
};