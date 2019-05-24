const cats = require('./cats-data')

let id = 0;
cats.forEach(cat => {
    cat.id = id
    cat.adopted = false
    id++;
});

const CatsService = {

  getCat() {
    let index = Math.floor(Math.random() * Math.floor(cats.length))
    return cats[index]
  },

}

module.exports = CatsService