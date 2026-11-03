import { db } from "../models/db.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const structs = await db.structStore.getAllStructs();
      const viewData = {
        title: "Castles and Fortifications Dashboard",
        user: loggedInUser,
        structs: structs,
      };
      return h.view("dashboard", viewData);
    },
  },

  addStruct: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const newStruct = {
        title: request.payload.title,
        user: loggedInUser._id,
      };
      await db.structStore.addStruct(newStruct);
      return h.redirect("/dashboard");
    },
  },
};