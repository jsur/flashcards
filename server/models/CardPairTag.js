module.exports = (sequelize, DataTypes) => {
  const CardPairTag = sequelize.define('CardPairTag', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    tag: {
      type: DataTypes.STRING
    }
  }, {
    underscored: true
  })

  return CardPairTag
}
