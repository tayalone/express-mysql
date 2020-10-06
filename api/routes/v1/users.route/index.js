const express = require("express")

const router = express.Router()

router.get("/me", (req, res) => {
  return res.send({ message: "OK", action: 'GET: /me"' })
})

module.exports = router
