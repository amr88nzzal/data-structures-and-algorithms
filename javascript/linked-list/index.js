'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    }
    else {
      let oldNode = this.head;
      this.head = newNode;
      newNode.next = oldNode;
    }
  }

  includes(value) {
    let scoopNode = this.head;

    while (scoopNode.next) {
      if (scoopNode.value === value) { return true; }
      scoopNode = scoopNode.next;
    }
    if (scoopNode.value === value) { return true; }
    return false;
  }

  toString() {
    let string = '';
    let scoopNode = this.head;
    while (scoopNode) {
      string += `{ ${scoopNode.value} } -> `;
      scoopNode = scoopNode.next;
    }
    string += `NULL`;
    return string;
  }
  addNode(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return this;
    }
    let scoopNode = this.head;
    while (scoopNode.next) {
      scoopNode = scoopNode.next;
    }
    scoopNode.next = newNode;
    return this;
  }
}

module.exports = LinkedList;
