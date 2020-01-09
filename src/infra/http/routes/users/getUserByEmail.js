const check = require('express-validator/check');
// const { validateInput } = require('../../utils/validate-input.js');
const { toApiResponse } = require('../../utils/response.js');


const createGetUserByEmailRoute = ({
  router,
  core: { userCore: { getUserByEmail } }
}) => {
  /**
   * @api {get} /user/getUsersByEmail Get user by email
   * @apiName GetUser
   * @apiGroup User
   *
   * @apiSuccess (200) {user} User
   */
  router.get(
    '/getUserByEmail',
    [
      check.param('email').isEmail(),
    ],
    toApiResponse(async req => {
      const users = await getUserByEmail();

      return {
        status: 200,
        data: users,
      };
    }),
  );

  return router;
};

module.exports = { createGetUserByEmailRoute };