import { db } from "../models/db.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const sites = await db.siteStore.getAllSites();
      const viewData = {
        title: "Castles and Fortifications Dashboard",
        user: loggedInUser,
        sites: sites,
      };
      return h.view("dashboard", viewData);
    },
  },
};