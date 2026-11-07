import { assert } from "chai";
import { tipperaryFortificationsService } from "./tipperary-fortifications-service.j";
import { decodeToken } from "../../src/api/jwt-utils.js";
import { maggie } from "../fixtures.js";

suite("Authentication API tests", async () => {
  setup(async () => {
    tipperaryFortificationsService.clearAuth();
    await tipperaryFortificationsService.createUser(maggie);
    await tipperaryFortificationsService.authenticate(maggie);
    await tipperaryFortificationsService.deleteAllUsers();
  });

  test("authenticate", async () => {
    const returnedUser = await tipperaryFortificationsService.createUser(maggie);
    const response = await tipperaryFortificationsService.authenticate(maggie);
    assert(response.success);
    assert.isDefined(response.token);
  });

  test("verify Token", async () => {
    const returnedUser = await tipperaryFortificationsService.createUser(maggie);
    const response = await tipperaryFortificationsService.authenticate(maggie);

    const userInfo = decodeToken(response.token);
    assert.equal(userInfo.email, returnedUser.email);
    assert.equal(userInfo.userId, returnedUser._id);
  });
});