const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const compress = require("compression")
const helmet = require("helmet")
const cors = require("cors")

const { logs, env, port } = require("./variables")
const routesV1 = require("../routes/v1")

const app = express()

app.use(morgan(logs))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(compress())

// secure apps by setting various HTTP headers
app.use(helmet())
// enable CORS - Cross Origin Resource Sharing
app.use(cors())

app.get("/", (req, res) => {
  return res.send({ message: "OK" })
})

app.get("/hello-world", (req, res) => {
  return res.send({ message: "OK", say: "Hello World" })
})

app.get("/env", (req, res) => {
  console.log(`process.env`, process.env)
  return res.send({ message: "OK", logs, env, port })
})

// used Router versioning
app.use("/v1", routesV1)

module.exports = app
