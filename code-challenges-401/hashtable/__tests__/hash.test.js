'use strict';

const HashTable = require('../hashTable');

describe('HashTable Testing', () => {
  it('1)- Adding a key/value to your hashtable results in the value being in the data structure', () => {
    let newHashTable = new HashTable(10);
    newHashTable.add('Amr', '0789334963');
    expect(newHashTable.get('Amr')['Amr']).toEqual('0789334963');
  });

  it('2)- Retrieving based on a key returns the value stored', () => {
    let newHashTable = new HashTable(10);
    newHashTable.add('Amr', '0789334963');
    expect(newHashTable.get('Amr')).toEqual({ Amr: '0789334963' });
  });

  it('3)- Successfully returns null for a key that does not exist in the hashtable', () => {
    let newHashTable = new HashTable(10);
    newHashTable.add('Amr', '0789334963');
    expect(newHashTable.contains('amr')).toBe(false);
  });

  it('4)- Successfully handle a collision within the hashtable', () => {
    let newHashTable = new HashTable(5);
    newHashTable.add('AMR', '0789334963');
    newHashTable.add('RMA', '0789123456');
    newHashTable.add('MRA', '0785544119');
    newHashTable.add('LTUC', '064000700');
    newHashTable.add('Home', '0789123321');

    expect(newHashTable.contains('AMR')).toBe(true);
    expect(newHashTable.contains('RMA')).toBe(true);
    expect(newHashTable.contains('ARM')).toBe(false);
  });
});
