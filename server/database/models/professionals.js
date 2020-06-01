/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('professionals', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'service_categories',
        key: 'id'
      }
    },
    adress: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    longitude: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    latitude: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    motorized: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'professionals'
  });
};
