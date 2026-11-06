import Boom from "@hapi/boom";
import { db } from "../models/db.js";

export const featureApi = {
  find: {
    auth: false,
    handler: async function (request, h) {
      try {
        const features = await db.featureStore.getAllFeatures();
        return features;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },

  findOne: {
    auth: false,
    async handler(request) {
      try {
        const feature = await db.featureStore.getFeatureById(request.params.id);
        if (!feature) {
          return Boom.notFound("No feature with this id");
        }
        return feature;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },

  create: {
    auth: false,
    handler: async function (request, h) {
      try {
        const feature = await db.featureStore.addFeature(request.params.id, request.payload);
        if (feature) {
          return h.response(feature).code(201);
        }
        return Boom.badImplementation("error creating feature");
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },

  deleteAll: {
    auth: false,
    handler: async function (request, h) {
      try {
        await db.featureStore.deleteAllFeatures();
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },

  deleteOne: {
    auth: false,
    handler: async function (request, h) {
      try {
        const feature = await db.featureStore.getFeatureById(request.params.id);
        if (!feature) {
          return Boom.notFound("No feature with this id");
        }
        await db.featureStore.deleteFeature(feature._id);
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("No feature with this id");
      }
    },
  },
};