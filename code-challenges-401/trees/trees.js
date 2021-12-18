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
}


const bt = new BinarySearchTree();
bt.add(5);
bt.add(2);
bt.add(4);
bt.add(3);
bt.add(1);
bt.add(6);
console.log(bt.contains(5));
console.log(bt.contains(10));
console.log(bt.preOrder());
console.log(bt.inOrder());
console.log(bt.postOrder());
 
module.exports = BinarySearchTree;
