const express = require('express')
const CatsService = require('./cats-service')

const CatsRouter = express.Router()

CatsRouter
  .route('/cat')
  .get((req, res, next) => {
    res.json(CatsService.getCat())
  })

module.exports = CatsRouter