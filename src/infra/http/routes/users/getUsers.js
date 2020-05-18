const {
  toApiResponse,
  ApiError,
  errorCodes: { notFoundErrorCode },
} = require('../../utils/response.js');

const { JobNotFoundError } = require('../../../../common/errors.js');

const createGetUsersRoute = ({
  router,
  application: {
    users: { getUsers },
  },
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
    toApiResponse(async () => {
      try {
        const users = await getUsers();

        return {
          status: 200,
          data: users,
        };
      } catch (error) {
        if (error instanceof JobNotFoundError) {
          throw new ApiError({
            status: 404,
            code: notFoundErrorCode,
            message: 'User not found.',
          });
        }
        throw error;
      }
    }),
  );

  return router;
};

module.exports = { createGetUsersRoute };
