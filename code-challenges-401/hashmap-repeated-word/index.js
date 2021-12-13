'use strict';


const HashMap = require('./hashTable');

const repeatedWord = (string) => {
  string = string.replace(/[,.:;]/g, '').trim();
  const strArr = string.toLowerCase().split(' ');
  const myHash = new HashMap(strArr.length);
  for (let i = 0; i < strArr.length; i++) {
    if (myHash.contains(strArr[i]) && myHash.getOne(strArr[i]).length > 0) {
      return strArr[i];
    }
    myHash.add(strArr[i], strArr[i]);
  }
  return 'there is no rebated string';
};

module.exports = repeatedWord;
