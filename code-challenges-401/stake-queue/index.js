'use strict';

const {Stack,Queue} = require ('./stack-queue');

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log(stack);
console.log(stack.length,'-------------');
console.log(stack.isEmpty());
console.log(stack.peek());
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);
queue.dequeue();
queue.dequeue();
console.log(queue);
console.log(queue.peek());
console.log(queue.isEmpty());

