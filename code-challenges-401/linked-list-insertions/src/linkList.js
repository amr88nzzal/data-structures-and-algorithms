const Node = require('./node');

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
  append(value) {
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
  insertBefore(value, newValue) {
    let newNode = new Node(newValue);
    let curNode = this.head;
    let leftList;
    let rightList;
    while ((curNode) && curNode.value !== value) {
      leftList = curNode;
      curNode = curNode.next;
    }
    if (curNode) {
      rightList = curNode;
      newNode.next = rightList;
      if (leftList) { leftList.next = newNode ;}
      else { this.head = newNode; }
    }
  }
  insertAfter(value, newValue) {
    let newNode = new Node(newValue);
    let curNode = this.head;
    let leftList;
    let rightList;
    while ((curNode) && curNode.value !== value) {
      curNode = curNode.next;
    }
    if (curNode) {
      leftList = curNode;
      rightList = curNode.next;
      newNode.next = rightList;
      leftList.next = newNode;
    }
  }

}

module.exports = LinkedList;
