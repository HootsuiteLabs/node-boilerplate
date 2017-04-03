'use strict';
let expect = require('chai').expect;
let mocha = require('mocha');

let MyClass = require('./index');


describe('Some test group', () => {

  it('returns true', () => {
    expect(MyClass.doSomething('test')).to.equal(true);
  });

  it('does not return false', () => {
    expect(MyClass.doSomething('test')).to.not.equal(false);
  });

});
