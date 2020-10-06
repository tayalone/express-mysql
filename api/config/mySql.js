const { Sequelize } = require("sequelize")

var sequelize = new Sequelize("shippop_member", "root", "password", {
  host: "db",
  dialect: "mysql",
  port: 3306
})

const mySql = {}

mySql.Sequelize = Sequelize
mySql.sequelize = sequelize

// db.customers = require('../model/customer.model.js')(sequelize, Sequelize);

module.exports = mySql
