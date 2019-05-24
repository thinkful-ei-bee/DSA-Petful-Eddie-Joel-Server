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
    return current.data;
  }
  else {
    return { Error: 'Something went wrong' }
  }
}

function next(cats) {
  return cats.first.data;
}

function del(cats) {
  if (cats.fist !== undefined || cats.fist !== null) {
    cats.dequeue();
    return;
  }
  return { Error: 'del() can not delete on empty' };
}

module.exports = { setInterval, cats, getById, next, del }