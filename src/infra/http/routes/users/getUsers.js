const { toApiResponse } = require('../../utils/response.js');

const createGetUsersRoute = ({
  router,
  application: { users: { getUsers } }
}) => {
  /**
   * @api {get} /users/getUsers Get users
   * @apiName GetUsers
   * @apiGroup User
   *
   * @apiSuccess (200) {users} Users.
   */
  router.get(
    '/getUsers',
    toApiResponse(async req => {
      const users = await getUsers();

      return {
        status: 200,
        data: users,
      };
    }),
  );

  return router;
};

module.exports = { createGetUsersRoute };