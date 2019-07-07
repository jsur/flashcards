module.exports = (sequelize, DataTypes) => {
  const CardPair = sequelize.define('CardPair', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    term: {
      type: DataTypes.STRING
    },
    definition: {
      type: DataTypes.STRING
    }
  }, {
    underscored: true
  })

  CardPair.associate = (models) => {
    CardPair.hasMany(models.CardPairTag, { foreignKey: 'cardpair_id' })
  }

  return CardPair
}
