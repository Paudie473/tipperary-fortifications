import { assert } from "chai";
import { tipperaryFortificationsService } from "./tipperary-fortifications-service.js";
import { decodeToken } from "../../src/api/jwt-utils.js";
import { maggieCredentials, maggie } from "../fixtures.js";

suite("Authentication API tests", async () => {
  setup(async () => {
    tipperaryFortificationsService.clearAuth();
    await tipperaryFortificationsService.createUser(maggie);
    await tipperaryFortificationsService.authenticate(maggieCredentials);
    await tipperaryFortificationsService.deleteAllUsers();
  });

  test("authenticate", async () => {
    const returnedUser = await tipperaryFortificationsService.createUser(maggie);
    const response = await tipperaryFortificationsService.authenticate(maggieCredentials);
    assert(response.success);
    assert.isDefined(response.token);
  });

  test("verify Token", async () => {
    const returnedUser = await tipperaryFortificationsService.createUser(maggie);
    const response = await tipperaryFortificationsService.authenticate(maggieCredentials);

    const userInfo = decodeToken(response.token);
    assert.equal(userInfo.email, returnedUser.email);
    assert.equal(userInfo.userId, returnedUser._id);
  });
});