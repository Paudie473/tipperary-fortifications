import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { db } from "../../src/models/db.js";
import { testSites, testFeatures, cahirCastle, rockOfCashel, chapel } from "../fixtures.js";

suite("Feature Model tests", () => {

  let cahirCastleList = null;

  setup(async () => {
    db.init("mongo");
    await db.siteStore.deleteAllSites();
    await db.featureStore.deleteAllFeatures();
    cahirCastleList = await db.siteStore.addSite(cahirCastle);
    for (let i = 0; i < testFeatures.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      testFeatures[i] = await db.featureStore.addFeature(cahirCastleList._id, testFeatures[i]);
    }
  });

  test("create single feature", async () => {
    const rockOfCashelList = await db.siteStore.addSite(rockOfCashel);
    const feature = await db.featureStore.addFeature(rockOfCashelList._id, chapel)
    assert.isNotNull(feature._id);
    assertSubset(chapel, feature);
  });

  test("get multiple features", async () => {
    const features = await db.featureStore.getFeaturesBySiteId(cahirCastleList._id);
    assert.equal(features.length, testFeatures.length)
  });

  test("delete all features", async () => {
    const features = await db.featureStore.getAllFeatures();
    assert.equal(testFeatures.length, features.length);
    await db.featureStore.deleteAllFeatures();
    const newFeatures = await db.featureStore.getAllFeatures();
    assert.equal(0, newFeatures.length);
  });

  test("get a feature - success", async () => {
    const rockOfCashelList = await db.siteStore.addSite(rockOfCashel);
    const feature = await db.featureStore.addFeature(rockOfCashelList._id, chapel)
    const newFeature = await db.featureStore.getFeatureById(feature._id);
    assertSubset(chapel, newFeature);
  });

  test("delete One Feature - success", async () => {
    await db.featureStore.deleteFeature(testFeatures[0]._id);
    const features = await db.featureStore.getAllFeatures();
    assert.equal(features.length, testSites.length - 1);
    const deletedFeature = await db.featureStore.getFeatureById(testFeatures[0]._id);
    assert.isNull(deletedFeature);
  });

  test("get a feature - bad params", async () => {
    assert.isNull(await db.featureStore.getFeatureById(""));
    assert.isNull(await db.featureStore.getFeatureById());
  });

  test("delete one feature - fail", async () => {
    await db.featureStore.deleteFeature("bad-id");
    const features = await db.featureStore.getAllFeatures();
    assert.equal(features.length, testSites.length);
  });
});

