Promise = require("bluebird")

const express = require("./config/express")
const mySql = require("./config/mySql")
const { port } = require("./config/variables")

// connect database
mySql.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync with { force: true }")
})

// start express server
express.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
)
