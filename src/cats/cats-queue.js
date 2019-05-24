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

  while(current.data.id !== id) {

    if(current.next === null || current.next === undefined) {
      return { Error: 'Not found' }
    }

    current = current.next;
  }

  if (current.data.id === id) {
    console.log('found it')
    return current.data;
  }

  //getById(current.next, id)
}

module.exports = { setInterval, cats, getById }