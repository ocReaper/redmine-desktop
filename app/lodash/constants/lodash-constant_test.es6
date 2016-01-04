/* global describe, beforeEach, it, expect, inject, module, _ */
'use strict';

describe.skip('_', () => {
  let constant;

  beforeEach(module('lodash'));

  beforeEach(inject(() => {
    constant = _;
  }));

  it('should equal 0', () => {
    expect(constant).to.equal(_);
  });
});
