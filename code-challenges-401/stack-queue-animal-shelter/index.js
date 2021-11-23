'use strict';

const AnimalShelter = require('./animal-shelter');

let cat1 = {
  type: 'cat',
  name: 'meme'
};
let cat2 = {
  type: 'cat',
  name: 'dodo'
};
let cat3 = {
  type: 'cat',
  name: 'smsm'
};
let doge1 = {
  type: 'doge',
  name: 'jeje'
};
let animalShelter = new AnimalShelter;
animalShelter.enqueue1(cat1);
animalShelter.enqueue1(cat2);
animalShelter.enqueue1(cat3);
animalShelter.enqueue1(doge1);

console.log(animalShelter.dequeue('cat'));
console.log(animalShelter.dequeue('doge'));
console.log(animalShelter.dequeue('doge'));
console.log(animalShelter.dequeue('cat'));
console.log(animalShelter.dequeue('cat'));
console.log(animalShelter.dequeue('cat'));
