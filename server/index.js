const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Sequelize = require('sequelize')

const user = require('./models/User')
const cardPair = require('./models/CardPair')
const cardPairTag = require('./models/CardPairTag')

const keys = require('./keys')
const PORT = 5000
const app = express()

const sequelize = new Sequelize(keys.pgDatabase, keys.pgUser, keys.pgPassword, {
  host: keys.pgHost,
  port: keys.pgPort,
  dialect: 'postgres',
  logging: false
})

const User = user(sequelize, Sequelize.DataTypes)
const CardPair = cardPair(sequelize, Sequelize.DataTypes)
const CardPairTag = cardPairTag(sequelize, Sequelize.DataTypes)

const DB = {
  User,
  CardPair,
  CardPairTag
}

Object.keys(DB).forEach(modelName => {
  if (DB[modelName] && DB[modelName].associate) {
    DB[modelName].associate(DB)
  }
})

sequelize.sync()
  .then(() => console.log('sequelize.sync done!'))
  .catch(error => console.log('error in sequelize.sync!', error))

app.use((req, res, next) => {
  req.db = DB
  next()
})

app.use(cors())
app.use(bodyParser.json())

app.use('/v1', require('./routes/v1'))

app.listen(PORT, error => {
  if (error) console.log('error in app.listen', error)
  console.log(`express server listening on port ${PORT}!`)
})