import { EventEmitter } from "events";
import { assert } from "chai";
import { tipperaryFortificationsService } from "./tipperary-fortifications-service.js";
import { assertSubset } from "../test-utils.js";

import { maggieCredentials, maggie, rockOfCashel, testSites } from "../fixtures.js";

EventEmitter.setMaxListeners(25);

suite("Site API tests", () => {

  let user = null;

  setup(async () => {
    tipperaryFortificationsService.clearAuth();
    user = await tipperaryFortificationsService.createUser(maggie);
    await tipperaryFortificationsService.authenticate(maggieCredentials);
    await tipperaryFortificationsService.deleteAllSites();
    await tipperaryFortificationsService.deleteAllUsers();
    user = await tipperaryFortificationsService.createUser(maggie);
    await tipperaryFortificationsService.authenticate(maggieCredentials);
    rockOfCashel.userid = user._id;
  });

  teardown(async () => {});

  test("create site", async () => {
    const returnedSite = await tipperaryFortificationsService.createSite(rockOfCashel);
    assert.isNotNull(returnedSite);
    assertSubset(rockOfCashel, returnedSite);
    assert.equal(returnedSite.userid, user._id);
  });

  test("delete a site", async () => {
    const site = await tipperaryFortificationsService.createSite(rockOfCashel);
    const response = await tipperaryFortificationsService.deleteSite(site._id);
    assert.equal(response.status, 204);
    try {
      const returnedSite = await tipperaryFortificationsService.getSite(site.id);
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No site with this id", "Incorrect Response Message");
    }
  });

  test("create multiple sites", async () => {
    for (let i = 0; i < testSites.length; i += 1) {
      testSites[i].userid = user._id;
      // eslint-disable-next-line no-await-in-loop
      await tipperaryFortificationsService.createSite(testSites[i]);
    }
    let returnedLists = await tipperaryFortificationsService.getAllSites();
    assert.equal(returnedLists.length, testSites.length);
    await tipperaryFortificationsService.deleteAllSites();
    returnedLists = await tipperaryFortificationsService.getAllSites();
    assert.equal(returnedLists.length, 0);
  });

  test("remove non-existent site", async () => {
    try {
      const response = await tipperaryFortificationsService.deleteSite("not an id");
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No site with this id", "Incorrect Response Message");
    }
  });
});

