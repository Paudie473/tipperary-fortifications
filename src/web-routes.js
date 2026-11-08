import { dashboardController } from "./controllers/dashboard-controller.js";
import { accountsController } from "./controllers/accounts-controller.js";
import { addSiteController } from "./controllers/add-site-controller.js";
import { myContributionsController } from "./controllers/my-contributions-controller.js";
import { siteController } from "./controllers/site-controller.js";
import { usersDashboardController } from "./controllers/users-dashboard-controller.js";

export const webRoutes = [
    { method: "GET", path: "/", config: accountsController.index },
    { method: "GET", path: "/signup", config: accountsController.showSignup },
    { method: "GET", path: "/login", config: accountsController.showLogin },
    { method: "GET", path: "/logout", config: accountsController.logout },
    { method: "POST", path: "/register", config: accountsController.signup },
    { method: "POST", path: "/authenticate", config: accountsController.login },

    { method: "GET", path: "/dashboard", config: dashboardController.index },

    
    { method: "GET", path: "/mycontributions", config: myContributionsController.index },
    { method: "GET", path: "/deletesite/{id}", config: myContributionsController.deleteSite },

    { method: "GET", path: "/addsite", config: addSiteController.index },
    { method: "POST", path: "/addsite", config: addSiteController.addSite },
    
    { method: "GET", path: "/site/{id}", config: siteController.index },
    { method: "POST", path: "/site/{id}/addfeature", config: siteController.addFeature },
    { method: "GET", path: "/site/{id}/deletefeature/{featureid}", config: siteController.deleteFeature },

    { method: "GET", path: "/{param*}", handler: { directory: { path: "./public" } }, options: { auth: false } },

    { method: "POST", path: "/site/{id}/uploadimage", config: siteController.uploadImage },

    { method: "GET", path: "/users", config: usersDashboardController.index },
    { method: "GET", path: "/deleteuser/{id}", config: usersDashboardController.deleteUser },
];