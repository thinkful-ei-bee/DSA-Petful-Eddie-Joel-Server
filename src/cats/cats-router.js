const express = require('express')
const CatsServce = require('./cats-service')

const CatsRouter = express.Router()

CatsRouter
  .route('/api/cat')
  .get((req, res, next) => {
    CatsServce.getCat()
      .then(cat => {
        res.json(CatsServce.serializeCat)
      })
      .catch(next)
  })

module.exports = CatsRouter