const { Router } = require('express');
const { createGetUsersRoute } = require('./getUsers.js');
const { createGetUserByEmailRoute } = require('./getUserByEmail.js');
const { createAddUserRoute } = require('./addUser.js');

const createUsersRoute = ({ core, application, bruteforce }) => {
  const router = new Router();

  createGetUsersRoute({ router, application });
  createGetUserByEmailRoute({ router, core });
  createAddUserRoute({ router, core, bruteforce });
  return router;
};

module.exports = { createUsersRoute };
