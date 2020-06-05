/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('credentials', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    salt: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'credentials'
  });
};
