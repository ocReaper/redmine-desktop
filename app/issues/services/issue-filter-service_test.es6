/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe.skip('IssueFilter', () => {
  let service;

  beforeEach(module('issues'));

  beforeEach(inject((IssueFilter) => {
    service = IssueFilter;
  }));

  it('should equal IssueFilter', () => {
    expect(service.get()).to.equal('IssueFilter');
  });
});
