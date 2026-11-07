import { assert } from "chai";
import { tipperaryFortificationsService } from "./tipperary-fortifications-service.js";
import { assertSubset } from "../test-utils.js";
import { maggieCredentials, maggie, testUsers } from "../fixtures.js";

const users = new Array(testUsers.length);

suite("User API tests", () => {
  setup(async () => {
    tipperaryFortificationsService.clearAuth();
    await tipperaryFortificationsService.createUser(maggie);
    await tipperaryFortificationsService.authenticate(maggieCredentials);
    await tipperaryFortificationsService.deleteAllUsers();
    for (let i = 0; i < testUsers.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      users[0] = await tipperaryFortificationsService.createUser(testUsers[i]);
    }
    await tipperaryFortificationsService.createUser(maggie);
    await tipperaryFortificationsService.authenticate(maggieCredentials);
  });
  teardown(async () => {
  });

  test("create a user", async () => {
    const newUser = await tipperaryFortificationsService.createUser(maggie);
    assertSubset(maggie, newUser);
    assert.isDefined(newUser._id);
  });

  test("delete all users", async () => {
    let returnedUsers = await tipperaryFortificationsService.getAllUsers();
    assert.equal(returnedUsers.length, 4);
    await tipperaryFortificationsService.deleteAllUsers();
    await tipperaryFortificationsService.createUser(maggie);
    await tipperaryFortificationsService.authenticate(maggieCredentials);
    returnedUsers = await tipperaryFortificationsService.getAllUsers();
    assert.equal(returnedUsers.length, 1);
  });

  test("get a user - success", async () => {
    const returnedUser = await tipperaryFortificationsService.getUser(users[0]._id);
    assert.deepEqual(users[0], returnedUser);
  });

  test("get a user - bad id", async () => {
    try {
      const returnedUser = await tipperaryFortificationsService.getUser("1234");
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No User with this id");
      assert.equal(error.response.data.statusCode, 404);
    }
  });

  test("get a user - deleted user", async () => {
    await tipperaryFortificationsService.deleteAllUsers();
    await tipperaryFortificationsService.createUser(maggie);
    await tipperaryFortificationsService.authenticate(maggieCredentials);
    try {
      const returnedUser = await tipperaryFortificationsService.getUser(testUsers[0]._id);
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No User with this id");
      assert.equal(error.response.data.statusCode, 404);
    }
  });
});