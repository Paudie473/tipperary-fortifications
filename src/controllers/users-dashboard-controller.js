import Boom from "@hapi/boom";
import { db } from "../models/db.js";

// I added this controller for admins to view user accounts and delete them if necessary
export const usersDashboardController = {
  index: {
    handler: async function (request, h) {
      // If this is the specially seeded admin user, then they can access this locked admin feature
      if (request.auth.credentials.role !== "admin") {
        return Boom.forbidden("Admin access required");
      }
      const isAdmin = true;
      const users = await db.userStore.getAllUsers();
      const viewData = {
        title: "User Dashboard",
        users: users,
        isAdmin,
      };
      return h.view("users-dashboard", viewData);
    },
  },

  deleteUser: {
    handler: async function (request, h) {
      if (request.auth.credentials.role !== "admin") {
        return Boom.forbidden("Admin access required");
      }
      const user = await db.userStore.getUserById(request.params.id);
      await db.userStore.deleteUserById(user._id);
      return h.redirect("/users");
    },
  },
};