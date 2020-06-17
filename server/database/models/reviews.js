/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reviews', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement : true
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    service_quality: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    communication: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    overall_rating: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    job_applications_id : {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'job_applications',
        key: 'id'
      }
    }
  }, {
    tableName: 'reviews'
  });
};
