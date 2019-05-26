const Sequelize = require("sequelize");
const config = require("./config/index");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    pool: {
      min: 0,
      max: 5,
      idle: 10000
    }
  }
);

module.exports = sequelize