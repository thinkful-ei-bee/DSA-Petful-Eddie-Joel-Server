const express = require('express')
const CatsService = require('./cats-service')
const CatsQueue = require('./cats-queue')

const CatsRouter = express.Router()

CatsRouter
  .route('/')
  .get((req, res, next) => {
    res.json(CatsQueue.cats.first)
  })
  .delete((req, res, next) => {
    CatsQueue.del(CatsQueue.cats);
    res.status(202).send;
  }) 

CatsRouter
  .route('/next')
  .get((req, res, next) => {
    res.json(CatsQueue.next(CatsQueue.cats))
  })

CatsRouter
  .route('/:id')
  .get((req, res, next) => {
    let id = parseInt(req.params.id)
    // console.log(id)
    res.json(CatsQueue.getById(CatsQueue.cats.first, id))
  })





module.exports = CatsRouter