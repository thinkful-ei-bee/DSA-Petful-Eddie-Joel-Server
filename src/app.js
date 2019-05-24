// require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { NODE_ENV } = require('./config')
const CatsRouter = require('./cats/cats-router')
const DogsRouter = require('./dogs/dogs-router')
const app = express()

app.use(cors());

app.use('/api/cat', CatsRouter)
app.use('/api/dog', DogsRouter)

app.use(function errorHandler(error, req, res, next) {
  let response
  if (NODE_ENV === 'production') {
    response = { error: 'Server error' }
  } else {
    console.error(error)
    response = { error: error.message, object: error }
  }
  res.status(500).json(response);
});

module.exports = app;
