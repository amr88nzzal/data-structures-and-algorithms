'use strict';
const { Node, Binary_Tree } = require('../tree-fizz-buzz');

let tree1;

describe('Testing Fizz Buzz Tree', () => {

  beforeAll(() => {
    let one = new Node(25); //'Buzz'
    let child1 = new Node(1);//'1'
    let child2 = new Node(3);//'Fizz'
    let child3 = new Node(5); //'Buzz'
    let child4 = new Node(10); //'Buzz'
    let child5 = new Node(15);//'FizzBuzz
    let child6 = new Node(20);//'Buzz'
    let child7 = new Node(22);//'22'

    one.children[0] = child1;
    one.children[1] = child2;
    one.children[2] = child3;
    one.children[0].children[0] = child4;
    one.children[1].children[0] = child5;
    one.children[1].children[1] = child6;
    one.children[1].children[2] = child7;

    tree1 = new Binary_Tree(one);

  });

  it('Happy Path', () => {

    let result_1 = tree1.fizz_Buzz(tree1);

    expect(result_1.root.value).toEqual('Buzz');
    expect(result_1.root.children[0].value).toEqual('1');
    expect(result_1.root.children[1].value).toEqual('Fizz');
    expect(result_1.root.children[2].value).toEqual('Buzz');
    expect(result_1.root.children[1].children[2].value).toEqual('22');
    expect(result_1.root.children[0].children[0].value).toEqual('Buzz');
    expect(result_1.root.children[1].children[0].value).toEqual('FizzBuzz');
  });

  it('Edge case empty k array tree, should raise an exception', () => {
    let tree2 = new Binary_Tree();
    let result_2 = tree2.fizz_Buzz(tree2);
    expect(result_2).toBe('Empty Tree!');

  });
});
