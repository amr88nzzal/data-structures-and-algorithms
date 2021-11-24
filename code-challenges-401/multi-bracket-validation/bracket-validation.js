'use strict';

const { Stack } = require('./stack-queue');
function bracketValidation(str) {
  const stack = new Stack;
  const openBrackets = ['(', '[', '{'];
  const closeBrackets = [')', ']', '}'];
  const swapBrackets = { '[': ']', '{': '}', '(': ')' };
  const bracketArr = str.split('');
  for (let i = 0; i < bracketArr.length; i++) {
    if (openBrackets.includes(bracketArr[i])) {
      stack.push(bracketArr[i]);
    } else if (closeBrackets.includes(bracketArr[i])) {
      if (swapBrackets[stack.peek()] === bracketArr[i]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return(stack.isEmpty());
}

module.exports = bracketValidation;
