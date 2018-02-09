require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const HTTPError = require('node-http-error')
const app = express()
const { propOr } = require('ramda')

const port = process.env.PORT || 4000

const { getAlbum } = require('./dal')

app.get('/', (req, res) => res.send(`<h1>Welcome to the Music API</h1>`))

app.get('/albums/:id', (req, res, next) => {
  //res.send(`You asked for ${req.params.id}`)
  getAlbum(req.params.id, function(err, album) {
    if (err) {
      next(new HTTPError(err.status, err.message, err))
      return
    }
    res.send(album)
  })
})

app.get('/artists/:id', (req, res, next) => {
  res.send(`You asked for ${req.params.id}`)
})

app.use(function(err, req, res, next) {
  res.status(err.status || 500).send(err.message)
})

app.listen(port || 4000, () =>
  console.log('MUSIC API is up and running on port', port)
)
