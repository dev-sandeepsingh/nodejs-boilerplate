const createGetUsers = ({
  sequelize: {
    models: { User },
  },
}) => {
  const getUsers = async () => {

    const users = await User.findAll();
    return users;
    
  };

  return getUsers;
};

module.exports = { createGetUsers };
