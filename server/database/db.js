const sequelize = require('sequelize');/////

// const mysql = require('mysql');

// const dbConnection = mysql.createConnection({
//   host: 'localhost',
//   user: "root",
//   password: "root",
//   database: "bricolyDB"
// });

// dbConnection.connect((err, data) => {
//   if (err){
//     throw err;
//   }
//   console.log(data);
// });

// module.exports = dbConnection;


const dbConnection = new sequelize('bricolyDB', 'root', '', {
  dialect: 'mysql',
  // host: 'localhost',
  // port: '3306',
  define: {
      timestamps: false
  }
})
module.exports = dbConnection;
