'use strict';

const Tree = require('../trees.js');

describe('testing tree methods', () => {
  const tree = new Tree();

  it('1)- can successfully instantiate an empty tree', () => {
    expect(tree.root).toEqual(null);
  });

  it('2)- can successfully instantiate a tree with a single root node', () => {
    tree.add(6);

    expect(tree.root.value).toEqual(6);
    expect(tree.root.left).toEqual(null);
    expect(tree.root.right).toEqual(null);
  });

  it('3)- can successfully add a left child and a right child to a single node', () => {
    tree.add(3);
    tree.add(9);

    expect(tree.root.value).toEqual(6);
    expect(tree.root.left.value).toEqual(3);
    expect(tree.root.right.value).toEqual(9);
  });


  it('4)- Can successfully return a collection from a preOrder traversal', () => {
    expect(tree.preOrder()).toEqual([6,3,9]);
  });

  it('5)- Can successfully return a collection from a post order traversal', () => {
    expect(tree.postOrder()).toEqual([3,9,6]);
  });
  it('6)- Can successfully determine with a boolean if a value is in a Tree', () => {
    expect(tree.contains(8)).toEqual(false);
    expect(tree.contains(9)).toEqual(true);
  });
  it('7)- Can successfully determine the max value is in a Tree', () => {
    expect(tree.max()).toEqual(9);
  });
});
