const CatsService = require('./cats-service')
const Queue = require('../tools/queue')

let cats = new Queue;

cats.enqueue(CatsService.getCat())

setInterval(() => {
  let count = 0;
  if (count < 10) {
    cats.enqueue(CatsService.getCat());
  }
}, 5000)

function getById(queue, id) {
  let current = queue;

  // console.log(`id: ${id}`);
  // console.log(`current.data.id: ${current.data.id} `);

  if (current.data.id == id) {
    return current.data;
  }
  console.log(current)
  if(current.next === null || current.next === undefined) {
    return { Error: 'Not found' }
  }

  getById(current.next, id)
}

module.exports = { setInterval, cats, getById }