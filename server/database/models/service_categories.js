/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('service_categories', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    icon_url: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'service_categories'
  });
};
