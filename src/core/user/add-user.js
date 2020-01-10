const createAddUser = ({ sequelize }) => {
  const {
    models: { User },
  } = sequelize;

  const addUser = async ({ email }) => {

    const user = User.create({
      email
    });
    
    return user;
  };
  return addUser;
};

module.exports = { createAddUser };