const path = require("path")

require("dotenv-safe").config({
  path: path.join(__dirname, "..", ".env"),
  sample: path.join(__dirname, "..", ".env.example")
})
module.exports = {
  env: process.env.NODE_ENV ? process.env.NODE_ENV : "developement",
  port: process.env.PORT ? process.env.NODE_PORT : 5000,
  logs: process.env.NODE_ENV === "production" ? "combined" : "dev"
}
