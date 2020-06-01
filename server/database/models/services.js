/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('services', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    service: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'service_categories',
        key: 'id'
      }
    }
  }, {
    tableName: 'services'
  });
};
