Promise = require("bluebird")

const express = require("./config/express")
const { port } = require("./config/variables")

express.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
)
