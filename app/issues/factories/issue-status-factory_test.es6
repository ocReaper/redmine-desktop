/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe.skip('IssueStatus', () => {
  let factory;

  beforeEach(module('issues'));

  beforeEach(inject((IssueStatus) => {
    factory = IssueStatus;
  }));

  it('should have someValue be IssueStatus', () => {
    expect(factory.someValue).to.equal('IssueStatus');
  });

  it('should have someMethod return IssueStatus', () => {
    expect(factory.someMethod()).to.equal('IssueStatus');
  });
});
