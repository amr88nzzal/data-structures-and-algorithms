'use strict';

const AnimalShelter = require('../animal-shelter');

describe('Animal Shelter testing', () => {
  test('1- can enqueue a doge', () => {
    let newAnimalShelter = new AnimalShelter();

    let doge = {
      type: 'doge',
      name: 'jax',
    };

    newAnimalShelter.enqueue(doge);
    expect(newAnimalShelter.doge.length).toBe(1);
  });

  test('2- can enqueue multiple doges', () => {
    let newAnimalShelter = new AnimalShelter();

    let doge1 = {
      type: 'doge',
      name: 'smsm',
    };
    let doge2 = {
      type: 'doge',
      name: 'shosho',
    };

    newAnimalShelter.enqueue(doge1);
    newAnimalShelter.enqueue(doge2);
    expect(newAnimalShelter.doge.length).toBe(2);
  });
  
  test('3- can enqueue a cat', () => {
    let newAnimalShelter = new AnimalShelter();

    let cat = {
      type: 'cat',
      name: 'nmlah',
    };

    newAnimalShelter.enqueue(cat);
    expect(newAnimalShelter.cat.length).toBe(1);
    newAnimalShelter.dequeue('cat');
  });

  test('4- can enqueue multiple cats', () => {
    let newAnimalShelter = new AnimalShelter();

    let cat1 = {
      type: 'cat',
      name: 'bsbs',
    };
    let cat2 = {
      type: 'cat',
      name: 'mshmsh',
    };

    newAnimalShelter.enqueue(cat1);
    newAnimalShelter.enqueue(cat2);
    console.log(newAnimalShelter.cat);
    expect(newAnimalShelter.cat.length).toBe(2);
    newAnimalShelter.dequeue('cat');
    newAnimalShelter.dequeue('cat');
  });

  test('5- can dequeue a cat or a doge, and returns null on any other type of animals', () => {
    let newAnimalShelter = new AnimalShelter();

    let cat = {
      type: 'cat',
      name: 'besbes',
    };
    let doge = {
      type: 'doge',
      name: 'mishmish',
    };

    newAnimalShelter.enqueue(cat);
    newAnimalShelter.enqueue(doge);
    expect(newAnimalShelter.dequeue('cat').name).toBe('besbes');
    expect(newAnimalShelter.dequeue('doge').name).toBe('mishmish');
    expect(newAnimalShelter.dequeue('parrot')).toBeNull();
  });
});
