'use strict';
describe('test selection algorithm',()=>{
  const insertionSort=require('../index');
  test('1)- empty array',()=>{
    let arr=[];
    expect(insertionSort(arr)).toEqual('the array is empty');
  });
  test('2)- sorting an array',()=>{
    expect(insertionSort([9,2,10,3,1,6])).toEqual([1,2,3,6,9,10]);
  });
  test('3)- sort an array with repeated items',()=>{
    expect(insertionSort([6,1,1,5,2,1])).toEqual([1,1,1,2,5,6]);
  });
  test('4)- Reverse-sorted',()=>{
    expect(insertionSort([9,8,7,6,5,4])).toEqual([4,5,6,7,8,9]);
  });
});
