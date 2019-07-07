module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    google_id: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    }
  }, {
    underscored: true
  })

  User.associate = (models) => {
    User.hasMany(models.CardPair, { foreignKey: 'user_id' })
  }

  return User
}
