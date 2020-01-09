const { createGetUserByEmail } = require('./get-user-by-email.js');


const createUserCore = ({
  sequelize,
}) => {
  const getUserByEmail = createGetUserByEmail({ sequelize });

  return {
    getUserByEmail,
  };
};

module.exports = {
  createUserCore,
};
