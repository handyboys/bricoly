/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('images', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uri: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'jobs',
        key: 'id'
      }
    }
  }, {
    tableName: 'images'
  });
};
