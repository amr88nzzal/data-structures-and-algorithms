'use strict';

const HashMap = require('./hashTable');

const myHash = new HashMap(5);

myHash.add('Amr', '0789334963');
myHash.add('Ahmad', '0789123456');
myHash.add('Sam', '0785544119');
myHash.add('Test1', '0781212303');
myHash.add('LTUC', '064000700');
myHash.add('Home', '0789123321');

console.log(myHash.get('Amr'));
console.log(myHash.get('Ahmad'));
console.log(myHash.get('Sam'));
console.log(myHash.get('Test1'));
console.log(myHash.get('LTUC'));
console.log(myHash.get('Home'));

console.log(myHash.contains('Home'));
console.log(myHash.contains('Amr'));
