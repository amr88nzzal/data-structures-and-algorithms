const Node = require('./node');

class LinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      let oldNode = this.head;
      this.head = newNode;
      newNode.next = oldNode;
    }
    this.length++;
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
      this.length++;
      return this;
    }
    let scoopNode = this.head;
    while (scoopNode.next) {
      scoopNode = scoopNode.next;
    }
    scoopNode.next = newNode;
    this.length++;
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
      if (leftList) { leftList.next = newNode; this.length++; }
      else { this.head = newNode; this.length++; }
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
      this.length++;
    }
  }
  //==============================
  kthFromEnd(k) {
    try {
      if ((k < this.length) && k >= 0) {
        let curNode = this.head;
        let kValue = curNode.value;
        for (let i = 0; i < (this.length - k - 1); i++) {

          if (curNode.value) {
            curNode = curNode.next;
            kValue = curNode.value;
          }
        }
        return kValue;
      }
      return null;
    }
    catch (e) { console.error(`wrong input ${k}`); }
  }
}

module.exports = LinkedList;
