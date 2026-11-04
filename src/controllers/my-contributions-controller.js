import { db } from "../models/db.js";

export const myContributionsController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const sites = await db.siteStore.getUserSites(loggedInUser._id);
      const viewData = {
        title: "My Contributions",
        user: loggedInUser,
        sites: sites,
      };
      return h.view("my-contributions", viewData);
    },
  },
  
  deleteSite: {
    handler: async function (request, h) {
      const site = await db.siteStore.getSiteById(request.params.id);
      await db.siteStore.deleteSiteById(site._id);
      return h.redirect("/mycontributions");
    },
  },
};