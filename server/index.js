const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const keys = require('./keys')

const PORT = 5000
const app = express()
app.use(cors())
app.use(bodyParser.json())

// Postgres client setup
const { Pool } = require('pg')
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
})

pgClient.on('error', () => console.log('Lost Postgres connection!'))

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(PORT, error => {
  if (error) console.log('error in app.listen', error)
  console.log(`express server listening on port ${PORT}!`)
})