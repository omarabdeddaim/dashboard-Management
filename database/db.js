const Sequelize = require("sequelize");

module.exports = new Sequelize("nata.house", "root", "", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 10000
  }
});
