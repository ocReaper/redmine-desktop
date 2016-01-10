/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe.skip('User', () => {
  let factory;

  beforeEach(module('loggedUser'));

  beforeEach(inject((User) => {
    factory = User;
  }));

  it('should have someValue be User', () => {
    expect(factory.someValue).to.equal('User');
  });

  it('should have someMethod return User', () => {
    expect(factory.someMethod()).to.equal('User');
  });
});
