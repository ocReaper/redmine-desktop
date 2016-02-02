/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe.skip('Issue', () => {
  let factory;

  beforeEach(module('issues'));

  beforeEach(inject((Issue) => {
    factory = Issue;
  }));

  it('should have someValue be Issue', () => {
    expect(factory.someValue).to.equal('Issue');
  });

  it('should have someMethod return Issue', () => {
    expect(factory.someMethod()).to.equal('Issue');
  });
});
