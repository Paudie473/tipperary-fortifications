import Boom from "@hapi/boom";
import { db } from "../models/db.js";
import { SiteSpec, SiteSpecPlus, SiteArraySpec, IdSpec } from "../models/joi-schemas.js";
import { validationError } from "./logger.js";

export const siteApi = {
  find: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const sites = db.siteStore.getAllSites();
        return sites;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Get all sites",
    notes: "Returns details of all sites",
    response: { schema: SiteArraySpec, failAction: validationError },
  },

  findOne: {
    auth: {
      strategy: "jwt",
    },
    async handler(request) {
      try {
        const site = await db.siteStore.getSiteById(request.params.id);
        if (!site) {
          return Boom.notFound("No site with this id");
        }
        return site;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Get a specific site",
    notes: "Returns site details",
    validate: { params: { id: IdSpec }, failAction: validationError },
    response: { schema: SiteSpecPlus, failAction: validationError },
  },

  findByUser: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const userid = request.auth.credentials._id;
        const userSites = await db.siteStore.getuserSites(userid);
        return userSites;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    response: { schema: SiteArraySpec, failAction: validationError },
    description: "Get all sites belonging to the authenticated user",
    notes: "Returns all sites belonging to the authenticated user",
  },

  create: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const site = request.payload;
        const userid = request.auth.credentials._id;
        const newSite = await db.siteStore.addSite(
          site,
          userid
        );
        if (newSite) {
          return h.response(newSite).code(201);
        }
        return Boom.badImplementation("error creating site");
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Create a site",
    notes: "Returns the newly created site",
    validate: { payload: SiteSpec, failAction: validationError },
    response: { schema: SiteSpecPlus, failAction: validationError },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        await db.siteStore.deleteAllSites();
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Delete all sites",
    notes: "All sites removed from database",
  },

  deleteOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const site = await db.siteStore.getSiteById(request.params.id);
        if (!site) {
          return Boom.notFound("No site with this id");
        }
        await db.siteStore.deleteSiteById(site._id);
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Delete all sites",
    notes: "All sites removed from database",
    validate: { params: { id: IdSpec }, failAction: validationError },
  },
};

