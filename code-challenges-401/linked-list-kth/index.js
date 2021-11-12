'use strict';
const LinkedList= require('./src/linkList');


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


