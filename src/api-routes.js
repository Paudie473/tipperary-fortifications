import { userApi } from "./api/user-api.js";
import { siteApi } from "./api/site-api.js";
import { featureApi } from "./api/feature-api.js";

export const apiRoutes = [
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },

  { method: "POST", path: "/api/sites", config: siteApi.create },
  { method: "DELETE", path: "/api/sites", config: siteApi.deleteAll },
  { method: "GET", path: "/api/sites", config: siteApi.find },
  { method: "GET", path: "/api/sites/{id}", config: siteApi.findOne },
  { method: "GET", path: "/api/sites/user", config: siteApi.findByUser },
  { method: "DELETE", path: "/api/sites/{id}", config: siteApi.deleteOne },

  { method: "GET", path: "/api/features", config: featureApi.find },
  { method: "GET", path: "/api/features/{id}", config: featureApi.findOne },
  { method: "POST", path: "/api/sites/{id}/features", config: featureApi.create },
  { method: "DELETE", path: "/api/features", config: featureApi.deleteAll },
  { method: "DELETE", path: "/api/features/{id}", config: featureApi.deleteOne },

  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },
];

