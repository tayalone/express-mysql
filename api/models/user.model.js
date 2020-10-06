const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  const User = sequelize.define(
    "User",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      email: { type: DataTypes.STRING, unique: true },
      password: { type: DataTypes.STRING(128) },
      salt: { type: DataTypes.STRING(128) }
    },
    { timestamps: true }
  )

  return User
}
