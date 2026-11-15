import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { db } from "../../src/models/db.js";
import { testSites, rockOfCashel } from "../fixtures.js";

suite("Site Model tests", () => {

  setup(async () => {
    await db.init("mongo", false);
    await db.siteStore.deleteAllSites();
    for (let i = 0; i < testSites.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      testSites[i] = await db.siteStore.addSite(testSites[i]);
    }
  });

  test("create a site", async () => {
    const site = await db.siteStore.addSite(rockOfCashel);
    assertSubset(rockOfCashel, site);
    assert.isDefined(site._id);
  });

  test("delete all sites", async () => {
    let returnedSites = await db.siteStore.getAllSites();
    assert.equal(returnedSites.length, 3);
    await db.siteStore.deleteAllSites();
    returnedSites = await db.siteStore.getAllSites();
    assert.equal(returnedSites.length, 0);
  });

  test("get a site - success", async () => {
    const site = await db.siteStore.addSite(rockOfCashel);
    const returnedSite = await db.siteStore.getSiteById(site._id);
    assertSubset(rockOfCashel, returnedSite);
  });

  test("get a site by type - success", async () => {
    await db.siteStore.addSite(rockOfCashel);
    let returnedSites = await db.siteStore.getSitesByType("Royal Site");
    assert.equal(returnedSites.length, 1);
    assertSubset(rockOfCashel, returnedSites[0]);
    returnedSites = await db.siteStore.getSitesByType("Castle");
    assert.equal(returnedSites.length, 2);
  });

  test("delete a site - success", async () => {
    const id = testSites[0]._id;
    await db.siteStore.deleteSiteById(id);
    const returnedSites = await db.siteStore.getAllSites();
    assert.equal(returnedSites.length, testSites.length - 1);
    const deletedSite = await db.siteStore.getSiteById(id);
    assert.isNull(deletedSite);
  });

  test("get a site - bad params", async () => {
    assert.isNull(await db.siteStore.getSiteById(""));
    assert.isNull(await db.siteStore.getSiteById());
  });

  test("delete a site - fail", async () => {
    await db.siteStore.deleteSiteById("bad-id");
    const allSites = await db.siteStore.getAllSites();
    assert.equal(testSites.length, allSites.length);
  });
});

