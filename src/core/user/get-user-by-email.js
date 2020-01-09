const createGetUserByEmail = ({ sequelize }) => {
  const {
    models: { User },
  } = sequelize;

  const getUserByEmail = async (email) => {
    return User.findOne({ email });    
  };
  return getUserByEmail;
};

module.exports = { createGetUserByEmail };