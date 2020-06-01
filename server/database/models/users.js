/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    is_professional: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    profile_picture_url: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'users'
  });
};
