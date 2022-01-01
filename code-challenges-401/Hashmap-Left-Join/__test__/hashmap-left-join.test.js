'use strict';
const Hashmap = require('../hashmap-left-join');

describe('LEFT JOIN TESTS', () => {
  let leftHashTable;
  let rightHashTable;
  beforeAll(() => {
    //left hash
    leftHashTable = new Hashmap(5000);
    leftHashTable.add('fond', 'enamored');
    leftHashTable.add('wrath', 'anger');
    leftHashTable.add('diligent', 'employed');
    leftHashTable.add('outfit', 'garb');
    leftHashTable.add('guide', 'usher');

    //right hash
    rightHashTable = new Hashmap(5000);
    rightHashTable.add('fond', 'averse');
    rightHashTable.add('wrath', 'delight');
    rightHashTable.add('diligent', 'idle');
    rightHashTable.add('guide', 'follow');
    rightHashTable.add('flow', 'jam');
  });
  it('1.successfully return the left join between two hashmaps', () => {
    let expectedResults = [
      ['wrath', 'anger', 'delight'],
      ['diligent', 'employed', 'idle'],
      ['outfit', 'garb', 'NULL'],
      ['fond', 'enamored', 'averse'],
      ['guide', 'usher', 'follow'],
    ];
    let hashTable = new Hashmap(5000);

    expect(hashTable.leftJoin(leftHashTable, rightHashTable)).toEqual(
      expectedResults
    );
  });
});
