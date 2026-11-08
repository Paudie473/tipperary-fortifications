import { db } from "../models/db.js";

export const myContributionsController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const isAdmin = loggedInUser.role ==="admin";
      const sites = await db.siteStore.getUserSites(loggedInUser._id);
      const viewData = {
        title: "My Contributions",
        user: loggedInUser,
        sites: sites,
        isAdmin,
      };
      return h.view("my-contributions", viewData);
    },
  },
  
  deleteSite: {
    handler: async function (request, h) {
      const site = await db.siteStore.getSiteById(request.params.id);
      // The below logic is similar to what is used on the admin route for the users dashboard except it also allows use for creator of a given site
      // It shows up a 403 error for anyone that isn't allowed to use it which is a little obstructive, but is fair as these URLs shouldn't even be available to such a user in userspace
      const loggedInUser = request.auth.credentials;
      const isAdmin = loggedInUser.role === "admin";
      const canEdit = isAdmin || String(loggedInUser._id) === String(site.userid);
      if (!canEdit) {
              return Boom.forbidden("Only the site contributor or an admin can delete this site");
            }
      await db.siteStore.deleteSiteById(site._id);
      // In cases where an admin deletes this redirects them back to dashboard. They can delete from either view but this keeps it simple and it would be more confusing if they were on dashboard and were then redirected to just their contribution page
      if (isAdmin) return h.redirect("/dashboard");
      return h.redirect("/mycontributions");
    },
  },
};