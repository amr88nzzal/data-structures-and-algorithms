'use strict';

const BinarySearchTree = require('../trees');


let tree = new BinarySearchTree();
tree.add(4);
tree.add(2);
tree.add(3);
tree.add(1);
tree.add(5);
tree.add(6);

describe('Tree Breadth', () => {

  it('can successfully return a collection from a breadth traversal', () => {
    let expected = [4,2,5,1,3,6];
    let breadth = tree.breadth();
    expect(breadth).toEqual(expected);
  });

  it('can successfully return exception if the tree is empty when invoking breadth method', () => {
    let emptyTree = new BinarySearchTree();
    let expected = 'Empty Tree!';
    let breadth = emptyTree.breadth();
    expect(breadth).toBe(expected);
  });
});
