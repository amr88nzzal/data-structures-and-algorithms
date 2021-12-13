'use strict';
const LinkedList = require('./linkedList');


class HashMap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }
  genHash(key) {
    const asciiSum = key.split('').reduce((p, n) => p + n.charCodeAt(0), 0);
    const withPrime = asciiSum * 599;
    return withPrime % this.size;
  }
  add(key, value) {
    const hash = this.genHash(key);
    const entry = { [key]: value };
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }
    this.map[hash].add(entry);
  }
  //------
  get(key) {
    const hash = this.genHash(key);
    let result = {};
    if (this.map[hash]) {
      const allValues = this.map[hash].values();
      allValues.map((item) => {
        const itemKey = Object.keys(item);
        if (itemKey[0] === key) {
          result = item;
        }
      });
    }
    return result;
  }
  contains(key) {
    if (this.get(key)[key]) { return true; } else { return false; }
  }
}
module.exports = HashMap;
