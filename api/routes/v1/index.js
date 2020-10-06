const express = require("express")
const authRoutes = require("./auth.route")
const userRoutes = require("./users.route")

const router = express.Router()

router.use("/auth", authRoutes)

router.use("/users", userRoutes)

module.exports = router
