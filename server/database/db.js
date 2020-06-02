const sequelize = require('sequelize');

const dbConnection = new sequelize('bricolyDB', 'root', 'root', {
  dialect: 'mysql',
  define: {
      timestamps: false
  }
});

module.exports = dbConnection;