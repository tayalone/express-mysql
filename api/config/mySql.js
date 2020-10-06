const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("shippop_member", "root", "password", {
  host: "db",
  dialect: "mysql",
  port: 3306
})

const mySql = {}

mySql.Sequelize = Sequelize
mySql.sequelize = sequelize

mySql.customers = require("../models/user.model")(sequelize)

module.exports = mySql
