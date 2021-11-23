'use strict';
class Node {
  constructor(value) { //instance of a node
    this.value = value;
    this.next = null;
  }
}

//-------------------

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }
  push(value) {
    let node = new Node(value);
    if (this.length === 0) {
      this.top = node;
    } else {
      let temp = this.top;
      this.top = node;
      node.next = temp;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) {
      return ('The Stack Is Empty');
    }
    else {
      let temp = this.top;
      this.top = temp.next;
      temp.next = null;
      this.length--;
      return temp;
    }
  }
  peek() {
    if (this.length !== 0) {
      return this.top.value;
    }
    return null;
  }
  isEmpty() {
    return this.length === 0;
  }
}

//-------------------
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }
  enqueue(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.length++;
    return this.rear.value;
  }
  dequeue(){
    if(this.length === 0){
      return ('The Queue is Empty');
    }else{
      let frontNode = this.front.value;
      let temp= this.front.next;
      this.front=temp;
      temp=null;
      this.length--;
      return frontNode;
    }
  }
  peek(){
    if(this.length===0){
      return null;
    }else{
      return this.front.value;
    }
  }
  isEmpty(){
    return this.length===0;
  }
}



module.exports = { Stack,Queue };
