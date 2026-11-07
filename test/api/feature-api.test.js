import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { tipperaryFortificationsService } from "./tipperary-fortifications-service.js";
import { maggie, testFeatures, cahirCastle, keep } from "../fixtures.js";

suite("Feature API tests", () => {
  let user = null;
  let cahirCastleFeatures = null;

  setup(async () => {
    tipperaryFortificationsService.clearAuth();
    user = await tipperaryFortificationsService.createUser(maggie);
    await tipperaryFortificationsService.authenticate(maggie);
    await tipperaryFortificationsService.deleteAllSites();
    await tipperaryFortificationsService.deleteAllFeatures();
    await tipperaryFortificationsService.deleteAllUsers();
    user = await tipperaryFortificationsService.createUser(maggie);
    await tipperaryFortificationsService.authenticate(maggie);
    cahirCastle.userid = user._id;
    cahirCastleFeatures = await tipperaryFortificationsService.createSite(cahirCastle);
  });

  teardown(async () => {});

  test("create feature", async () => {
    const returnedFeature = await tipperaryFortificationsService.createFeature(cahirCastleFeatures._id, keep);
    assertSubset(keep, returnedFeature);
  });

  test("create Multiple features", async () => {
    for (let i = 0; i < testFeatures.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await tipperaryFortificationsService.createFeature(cahirCastleFeatures._id, testFeatures[i]);
    }
    const returnedFeatures = await tipperaryFortificationsService.getAllFeatures();
    assert.equal(returnedFeatures.length, testFeatures.length);
    for (let i = 0; i < returnedFeatures.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const feature = await tipperaryFortificationsService.getFeature(returnedFeatures[i]._id);
      assertSubset(feature, returnedFeatures[i]);
    }
  });

  test("Delete FeatureApi", async () => {
    for (let i = 0; i < testFeatures.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await tipperaryFortificationsService.createFeature(cahirCastleFeatures._id, testFeatures[i]);
    }
    let returnedFeatures = await tipperaryFortificationsService.getAllFeatures();
    assert.equal(returnedFeatures.length, testFeatures.length);
    for (let i = 0; i < returnedFeatures.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const feature = await tipperaryFortificationsService.deleteFeature(returnedFeatures[i]._id);
    }
    returnedFeatures = await tipperaryFortificationsService.getAllFeatures();
    assert.equal(returnedFeatures.length, 0);
  });

  test("denormalised site", async () => {
    for (let i = 0; i < testFeatures.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await tipperaryFortificationsService.createFeature(cahirCastleFeatures._id, testFeatures[i]);
    }
    const returnedSite = await tipperaryFortificationsService.getSite(cahirCastleFeatures._id);
    assert.equal(returnedSite.features.length, testFeatures.length);
    for (let i = 0; i < testFeatures.length; i += 1) {
      assertSubset(testFeatures[i], returnedSite.features[i]);
    }
  });
});

