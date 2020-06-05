const sequelize = require('sequelize');

const dbConnection = new sequelize('bricolyDB', 'root', '', {
  dialect: 'mysql',
  define: {
      timestamps: false
  }
});

module.exports = dbConnection;