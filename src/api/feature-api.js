import Boom from "@hapi/boom";
import { db } from "../models/db.js";
import { FeatureSpec, FeatureSpecPlus, FeatureArraySpec, IdSpec } from "../models/joi-schemas.js";
import { validationError } from "./logger.js";

export const featureApi = {
  find: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const features = await db.featureStore.getAllFeatures();
        return features;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Get all features",
    notes: "Returns details of all features",
    response: { schema: FeatureArraySpec, failAction: validationError },
  },

  findOne: {
    auth: {
      strategy: "jwt",
    },
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
    tags: ["api"],
    description: "Get a specific feature",
    notes: "Returns feature details",
    validate: { params: { id: IdSpec }, failAction: validationError },
    response: { schema: FeatureSpecPlus, failAction: validationError },
  },

  create: {
    auth: {
      strategy: "jwt",
    },
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
    tags: ["api"],
    description: "Create a feature",
    notes: "Returns the newly created feature",
    validate: { payload: FeatureSpec, failAction: validationError },
    response: { schema: FeatureSpecPlus, failAction: validationError },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        await db.featureStore.deleteAllFeatures();
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Delete all features",
    notes: "All features removed from database",
  },

  deleteOne: {
    auth: {
      strategy: "jwt",
    },
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
    tags: ["api"],
    description: "Delete all features",
    notes: "All features removed from database",
    validate: { params: { id: IdSpec }, failAction: validationError },
  },
};