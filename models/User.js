const Sequelize = require("sequelize");
const db = require("../database/db");

const User = db.define(
  "user",
  {
    num: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id: {
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);

module.exports = User;
