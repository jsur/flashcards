const express = require('express')
const { OAuth2Client } = require('google-auth-library')
const router = express.Router()

const keys = require('../../keys')
const gAuthClient = new OAuth2Client(keys.gClientId);

router.get('/', async (req, res) => {
  try {
    const users = await req.db.User.findAll()
    return res.status(200).json({ users })
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
})

router.post('/login', async (req, res) => {
  try {
    const { idToken, email } = req.body
    const ticket = await gAuthClient.verifyIdToken({ idToken, audience: keys.gClientId })
    const payload = ticket.getPayload()
    // TODO:
    // create user (email, payload.sub)
    // create middleware for user auth for secure routes, gAuthClient.verifyIdToken check sinne
    return res.status(200).json({ gUserId: payload.sub, email })
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
})

module.exports = router