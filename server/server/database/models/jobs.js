/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobs', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    service_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    service_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'services',
        key: 'id'
      }
    },
    client_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: 'open'
    },
    longitude: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    latitude: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    related_info: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'jobs'
  });
};
