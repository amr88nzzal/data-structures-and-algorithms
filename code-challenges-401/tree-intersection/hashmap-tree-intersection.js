'use strict';
const HashMap = require('../hashtable/hashTable');

function treeIntersection(tree_1, tree_2) {
  if (tree_1.root === null || tree_2.root === null) {
    return 'Empty Tree!';
  }
  let arr = [];
  const newHashTable = new HashMap(3533);
  let arr_1 = tree_1.preOrder();
  let arr_2 = tree_2.preOrder();

  for (let i = 0; i < arr_1.length; i++) {
    let key = arr_1[i].toString();
    let val = arr_1[i];
    if (!newHashTable.contains(key)) {
      newHashTable.add(key, val);
    }
  }
  for (let i = 0; i < arr_2.length; i++) {
    let key = arr_2[i].toString();
    let val2 = arr_2[i];
    if (newHashTable.contains(key)) {
      arr.push(val2);
    }
  }
  if (arr.length > 0) {
    return arr;
  } else {
    return 'There is No matching values';
  }
}

module.exports = treeIntersection;


