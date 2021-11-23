'use strict';
//------------------------------------------------------------------------

const PseudoQueue = require('../pseudo-queue');
let queue = new PseudoQueue();

//------------------------------------------------------------------------
describe('testing pseudo queue implemented using 2 stacks', () => {
  it('1- Can enqueue values to an empty queue', () => {
    queue.enqueue(1);
    expect(queue.queueSize).toBe(1);
  });
  //------------------------------------------------------------------------

  it('2- Can enqueue multiple values to a queue', () => {
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    expect(queue.queueSize).toBe(5);
  });
  //------------------------------------------------------------------------

  it('3- Can dequeue a value from a queue', () => {
    expect(queue.dequeue()).toBe(1);
    expect(queue.queueSize).toBe(4);
  });
  //------------------------------------------------------------------------

  it('4- Can dequeue multiple values from a queue', () => {
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.queueSize).toBe(2);
  });
  //------------------------------------------------------------------------

  it('5- Can enqueue values to a queue after dequeuing and dequeue again', () => {
    queue.enqueue(6);
    queue.enqueue(7);
    expect(queue.queueSize).toBe(4);
    expect(queue.dequeue()).toBe(4);
  });
  //------------------------------------------------------------------------

  it('6- returns false when dequeuing from an empty queue', () => {
    let emptyQueue = new PseudoQueue();
    expect(emptyQueue.dequeue()).toBeNull();
  });
  //------------------------------------------------------------------------

});
