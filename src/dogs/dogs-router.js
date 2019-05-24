const express = require('express')
const DogsService = require('./dogs-service')

const DogsRouter = express.Router()

DogsRouter
  .route('/')
  .get((req, res, next) => {
    res.json(DogsService.getDog())
  })

module.exports = DogsRouter