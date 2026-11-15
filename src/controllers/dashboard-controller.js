import { db } from "../models/db.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      // If a user is an admin they can access a special admin dashboard that allows them to delete any site as needed
      // This isAdmin boolean is also used throughout the site to show the admin menu that has the user dashboard as an option
      const isAdmin = loggedInUser.role ==="admin";
      const filter = request.query.type;
      let sites;
      if (filter) {
        sites = await db.siteStore.getSitesByType(filter);
      } else {
        sites = await db.siteStore.getAllSites();
      };
      const viewData = {
        title: "Castles and Fortifications Dashboard",
        user: loggedInUser,
        sites: sites,
        isAdmin,
        filter,
      };
      return h.view("dashboard", viewData);
    },
  },
};