const check = require('express-validator');
const { validateInput } = require('../../utils/validate-input.js');
const { toApiResponse } = require('../../utils/response.js');

const createAddUserRoute = ({
  router,
  core: {
    userCore: { addUser },
  },
}) => {
  /**
   * @api {post} /user/addUser Add user
   * @apiName AddUser
   * @apiGroup User
   *
   * @apiParam { email } email
   *
   */
  router.post(
    '/addUser',
    [check.body('email').isEmail()],
    validateInput,
    toApiResponse(async ({ body: { email } }) => {
      await addUser({ email });
      return { status: 204, data: null };
    }),
  );

  return router;
};

module.exports = { createAddUserRoute };
