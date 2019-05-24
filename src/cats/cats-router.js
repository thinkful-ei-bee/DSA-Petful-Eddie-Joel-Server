const express = require('express')
const CatsService = require('./cats-service')
const CatsQueue = require('./cats-queue')

const CatsRouter = express.Router()

CatsRouter
  .route('/')
  .get((req, res, next) => {
    res.json(CatsQueue.cats.first)
  })

CatsRouter
  .route('/:id')
  .get((req, res, next) => {
    let id = parseInt(req.params.id)
    // console.log(id)
    res.json(CatsQueue.getById(CatsQueue.cats.first, id))
  })

module.exports = CatsRouter