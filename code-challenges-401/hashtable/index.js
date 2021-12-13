'use strict';

const HashMap = require('./hashTable');

const myHash = new HashMap(5);

myHash.add('AMR', '0789334963');
myHash.add('RAM', '0789123456');
myHash.add('RMA', '0785544119');
myHash.add('Test1', '0781212303');
myHash.add('LTUC', '064000700');
myHash.add('Home', '0789123321');

console.log(myHash.get('ARM'),' not exist');
console.log(myHash.get('AMR'),' exist');
console.log(myHash.contains('ARM'),'ARM not exist' );
console.log(myHash.contains('AMR'),'AMR exist');
