'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  preOrder() {
    try {
      const treeArr = [];
      const _traverse = (node) => {
        treeArr.push(node.value);
        if (node.left) { _traverse(node.left); }
        if (node.right) { _traverse(node.right); }
      };
      _traverse(this.root);
      return treeArr;
    } catch (error) {
      console.error('Error ((preOrder))===>>', error);
    }
  }

  inOrder() {
    try {
      const treeArr = [];
      const _traverse = (node) => {
        if (node.left) { _traverse(node.left); }
        treeArr.push(node.value);
        if (node.right) { _traverse(node.right); }
      };
      _traverse(this.root);
      return treeArr;
    } catch (error) {
      console.error('Error ((In Order))===>>', error);
    }
  }
  postOrder() {
    try {
      const treeArr = [];
      const _traverse = (node) => {
        if (node.left) { _traverse(node.left); }
        if (node.right) { _traverse(node.right); }
        treeArr.push(node.value);
      };
      _traverse(this.root);
      return treeArr;
    } catch (error) {
      console.error('Error ((Post Order))===>>', error);
    }
  }
}
class BinarySearchTree extends BinaryTree {
  constructor(props) {
    super(props);
  }
  add(value) {
    if (!this.root) { this.root = new Node(value); }
    const _binCheck = (node) => {
      if (value < node.value) {
        if (node.left) {
          _binCheck(node.left);
        }
        if (!node.left) {
          node.left = new Node(value);
        }
      }
      if (value > node.value) {
        if (node.right) {
          _binCheck(node.right);
        }
        if (!node.right) {
          node.right = new Node(value);
        }
      }
    };
    _binCheck(this.root);
  }
  contains(value) {
    let treeValues = this.inOrder();

    return treeValues.includes(value);
  }
  max() {
    let maxNode = this.inOrder();
    return (maxNode.reduce((a, b) => { return Math.max(a, b); }, 0));
  }
  breadth() {
    let result = [];
    let roots = [];
    console.log('--***************-',this.root);
    if (this.root === null) {
      return ('Empty Tree!');
    }
    else {
      roots.push(this.root);
      while (roots.length) {
        const node = roots.shift();
        if (node.left) {
          roots.push(node.left);
        }
        if (node.right) {
          roots.push(node.right);
        }
        result.push(node.value);
      }
    }
    return result;
  }

}


const bt = new BinarySearchTree();
bt.add(6);
bt.add(1);
bt.add(2);
bt.add(3);
bt.add(5);
bt.add(4);

console.log(bt.contains(5));
console.log(bt.contains(10));
console.log(bt.preOrder());
console.log(bt.inOrder());
console.log(bt.postOrder());
console.log(bt.max());
console.log(bt.breadth());

module.exports = {BinarySearchTree,BinaryTree,Node};
