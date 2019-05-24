const dogs = require('./dogs-data')

let id = 0;
dogs.forEach(dog => {
    dog.id = id
    dog.adopted = false
    id++;
});

const DogsService = {

  getDog() {
    let index = Math.floor(Math.random() * Math.floor(dogs.length))
    return dogs[index]
  },

}

module.exports = DogsService