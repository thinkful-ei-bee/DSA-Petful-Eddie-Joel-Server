const cats = require('./cats-data')

const CatsService = {

  getCat() {
    let index = Math.floor(Math.random() * Math.floor(cats.length))
    return cats[index]
  },

}

module.exports = CatsService