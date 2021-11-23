'use strict';


//----------------------------
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.length++;
    return this.length;
  }

  pop() {
    if (this.length === 0) return null;
    let temp = this.first.value;
    if (this.length === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return temp;
  }

  peek() {
    if (this.length === 0) return null;
    let temp = this.first;
    return temp;
  }

}
// ------------------------------------------
class PseudoQueue {
  constructor() {
    this.pushStack = new Stack();
    this.popStack = new Stack();
    this.queueSize = 0;
  }
  enqueue(value) {
    this.pushStack.push(value);
    this.queueSize = this.pushStack.length + this.popStack.length;
  }

  dequeue() {
    if (this.popStack.length > 0) {
      this.queueSize = this.pushStack.length + this.popStack.length - 1;
      return this.popStack.pop();
    }
    while (this.pushStack.length > 0) {
      this.popStack.push(this.pushStack.pop());
    }
    this.queueSize = this.pushStack.length + this.popStack.length - 1;
    return this.popStack.pop();
  }

}

// let queue = new PseudoQueue();
// queue.enqueue('A');
// // queue.enqueue('B');
// // queue.enqueue('C');
// console.log('====================');
// console.log(queue);
// console.log('====================\n\n');
// console.log('********************');
// console.log(queue.dequeue());
// console.log('********************');
module.exports = PseudoQueue;
