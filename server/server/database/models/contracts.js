/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contracts', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'jobs',
        key: 'id'
      }
    },
    professional_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    end_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    signature_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    closure_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    expected_start_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    expected_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    tasks: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'contracts'
  });
};
