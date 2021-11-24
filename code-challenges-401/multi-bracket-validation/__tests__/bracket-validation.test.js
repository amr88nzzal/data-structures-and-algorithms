'use strict';

const multiBracketValidation = require('../bracket-validation');


describe('Multi brackets validation function test', () => {

  it('1- Returns true when all of the bracket pairs are in balance', () => {
    expect(multiBracketValidation(`{[()]}`)).toBe(true);
  });

  it('2- Returns false when all of the bracket pairs are not in balance', () => {
    expect(multiBracketValidation(`(({()])[}]]{}`)).toBe(false);
  });

  it('3- Returns true when we have balanced brackets with other characters in the string', () => {
    expect(multiBracketValidation(`({[Random char]})`)).toBe(true);
  });

  it('returns false when we have not balanced brackets with other characters in the string', () => {
    expect(multiBracketValidation(`({[Random char)]})`)).toBe(false);
  });
});
