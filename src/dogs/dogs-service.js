const dogs = require('./dogs-data')

const DogsService = {

  getDog() {
    let index = Math.floor(Math.random() * Math.floor(dogs.length))
    return dogs[index]
  },

}

module.exports = DogsService