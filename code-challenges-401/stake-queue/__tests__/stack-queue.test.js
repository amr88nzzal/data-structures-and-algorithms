'use strict';
const { Stack, Queue } = require('../stack-queue');
const stack = new Stack();
const newStack = new Stack();
const queue = new Queue();
const newQueue = new Queue();

describe('Stack testing', () => {
  it('1)- Can successfully push onto a stack', () => {
    stack.push(1);
    expect(stack.length).toEqual(1);
    expect(stack.peek()).toEqual(1);
  });
  it('2)-Can successfully push multiple values onto a stack', () => {
    stack.push(2);
    stack.push(3);
    expect(stack.length).toEqual(3);
    expect(stack.peek()).toEqual(3);

  });
  it('3)-Can successfully pop off the stack', () => {
    stack.pop();
    expect(stack.length).toEqual(2);
    expect(stack.peek()).toEqual(2);
  });
  it('4)-Can successfully empty a stack after multiple pops', () => {
    stack.pop();
    stack.pop();
    expect(stack.length).toEqual(0);
    expect(stack.isEmpty()).toBe(true);
  });
  it('5)-Can successfully peek the next item on the stack', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toEqual(2);
  });
  it('6)-Can successfully instantiate an empty stack', () => {
    expect(newStack.peek()).toBeNull();
  });
  it('7)-Calling pop or peek on empty stack raises exception', () => {
    expect(newStack.peek()).toBeNull();
    expect(newStack.pop()).toBe('The Stack Is Empty');
  });
});
//-----------------
describe('Queue testing', () => {
  it('1)- Can successfully enqueue into a queue', () => {
    queue.enqueue('A');
    expect(queue.peek()).toEqual('A');
    expect(queue.length).toEqual(1);
  });
  it('2)-Can successfully enqueue multiple values into a queue', () => {
    queue.enqueue('B');
    queue.enqueue('C');
    queue.enqueue('D');
    expect(queue.peek()).toEqual('A');
    expect(queue.length).toEqual(4);
  });
  it('3)-Can successfully dequeue out of a queue the expected value', () => {
    expect(queue.dequeue()).toEqual('A');
    expect(queue.length).toEqual(3);
  });
  it('4)-Can successfully peek into a queue, seeing the expected value', () => {
    expect(queue.peek()).toEqual('B');
    expect(queue.length).toEqual(3);
  });
  it('5)-Can successfully empty a queue after multiple dequeues', () => {
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    
    expect(queue.length).toEqual(0);
    expect(queue.isEmpty()).toBe(true);
  });
  it('6)-Can successfully instantiate an empty queue', () => {
    expect(newQueue.peek()).toBeNull();
  });
  it('7)-Calling dequeue or peek on empty queue raises exception', () => {
    expect(newQueue.peek()).toBeNull();
    expect(newQueue.dequeue()).toBe('The Queue is Empty');
  });
});

// queue.enqueue(2);
// queue.enqueue(3);
// console.log(queue);
// queue.dequeue();
// queue.dequeue();
// console.log(queue);
// console.log(queue.peek());
// console.log(queue.isEmpty());



