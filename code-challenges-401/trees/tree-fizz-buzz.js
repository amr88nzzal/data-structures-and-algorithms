'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class Binary_Tree {
  constructor(root = null) {
    this.root = root;
  }
  fizz_Buzz(tree) {
    if (!tree.root) {
      return ('Empty Tree!');
    }
    let newTree = tree;
    let traversal = (node) => {
      if (node.value % 15 === 0) {
        node.value = 'FizzBuzz';
      }
      else if (node.value % 3 === 0) {
        node.value = 'Fizz';
      }
      else if (node.value % 5 === 0) {
        node.value = 'Buzz';
      }
      else {
        node.value = (node.value).toString();
      }
      for (let i = 0; i < node.children.length; i++) {
        traversal(node.children[i]);
      }
    };
    traversal(newTree.root);
    return newTree;
  }
}


module.exports = { Node, Binary_Tree };
