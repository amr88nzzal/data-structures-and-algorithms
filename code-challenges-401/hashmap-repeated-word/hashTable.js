'use strict';
const LinkedList = require('./linkedList');


class HashMap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }
  genHash(key) {
    const asciiSum = key.split('').reduce((p, n) => p + n.charCodeAt(0)^2, 0);
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
  getAll(key) {
    const hash = this.genHash(key);
    return this.map[hash].values();
  }
  getOne(key) {
    const hash = this.genHash(key);
    return this.map[hash].oneValue(key);
  }
  contains(key){
    const hash = this.genHash(key);
    if(this.map[hash])
    {return true;}
    else{return false;}
  }
}
module.exports = HashMap;
