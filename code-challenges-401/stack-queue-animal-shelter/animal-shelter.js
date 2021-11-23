'use strict';

const { Queue } = require('./stack-queue');
class AnimalShelter {
  constructor() {
    this.doge = new Queue;
    this.cat = new Queue;}
  enqueue(animal) {
    if (animal.type !== 'doge' && animal.type !== 'cat') {
      return ('Can accept cats or doges only');
    }
    if (animal.type === 'doge') {
      this.doge.enqueue(animal);
      console.log(this.doge);
    } else {
      this.cat.enqueue(animal);
    }}
  dequeue(pref) {
    if (pref === 'doge') {
      return this.doge.dequeue();
    } else if (pref === 'cat') {
      return this.cat.dequeue();
    }
    return null;}}


module.exports = AnimalShelter;
