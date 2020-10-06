const express = require("express")

const router = express.Router()

router.post("/local-register", (req, res) => {
  return res.send({ message: "OK", action: 'POST: /local-register"' })
})

router.post("/local-login", (req, res) => {
  return res.send({ message: "OK", action: 'POST: /local-login"' })
})

module.exports = router
