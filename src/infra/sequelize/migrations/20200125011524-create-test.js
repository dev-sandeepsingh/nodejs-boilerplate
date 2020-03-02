module.exports = {
  up: (queryInterface, { STRING, INTEGER }) =>
    queryInterface.createTable('Test', {
      testId: {
        allowNull: false,
        primaryKey: true,
        type: INTEGER,
        autoIncrement: true,
      },
      test: {
        type: STRING,
      },
    }),
  down: queryInterface => queryInterface.dropTable('Test'),
};
