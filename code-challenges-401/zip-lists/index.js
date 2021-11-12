'use strict';
const LinkedList= require('./src/linkList');
const zipLists = require('./src/zipLists');


const list = new LinkedList();
list.append('a');
list.append('b');
list.append('e');
console.log(list.toString(),'\n------------------');
list.insertBefore('a','z');
console.log(list.toString(),'\n------------------');

console.log('\n***********************');
console.log(list.toString(),'\n------------------');
list.insertAfter('c','d');
console.log(list.toString(),'\n------------------');
console.log('\n***********************');
console.log(list.toString(),'\n------------------');
list.kthFromEnd(2);
list.kthFromEnd(7);
list.kthFromEnd(3);
list.kthFromEnd(-7);
console.log(list.toString(),'\n------------------');
console.log('==============zipLits=============');
const list1 = new LinkedList();
list1.append('A');
list1.append('C');
list1.append('E');
const list2 = new LinkedList();
list2.append('B');
list2.append('D');
list2.append('F');
let llZip=zipLists(list1, list2);
console.log(llZip.toString());
llZip.append('88')
console.log(llZip.toString());
