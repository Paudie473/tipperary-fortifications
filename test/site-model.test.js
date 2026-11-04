import { assert } from "chai";
import { db } from "../src/models/db.js";
import { testSites, rockOfCashel } from "./fixtures.js";

suite("Site Model tests", () => {

  setup(async () => {
    db.init("json");
    await db.siteStore.deleteAllSites();
    for (let i = 0; i < testSites.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      testSites[i] = await db.siteStore.addSite(testSites[i]);
    }
  });

  test("create a site", async () => {
    const site = await db.siteStore.addSite(rockOfCashel);
    assert.equal(rockOfCashel, site);
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
    assert.equal(rockOfCashel, site);
  });

  test("delete One Playist - success", async () => {
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

  test("delete One Site - fail", async () => {
    await db.siteStore.deleteSiteById("bad-id");
    const allSites = await db.siteStore.getAllSites();
    assert.equal(testSites.length, allSites.length);
  });
});

