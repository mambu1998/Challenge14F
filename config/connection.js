const Sequelize = require("sequelize");
require("dotenv").config();
let sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize("sql5457580", "sql5457580", "w3PiJzVwPa", {
    host: "sql5.freesqldatabase.com",
    dialect: "mysql",
    port: 3306,
  });
}
module.exports = sequelize;
