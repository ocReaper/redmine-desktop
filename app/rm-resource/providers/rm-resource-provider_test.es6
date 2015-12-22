/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe.skip('RmResource', () => {
  let provider;

  beforeEach(module('rmResource'));

  beforeEach(inject((RmResource) => {
    provider = RmResource;
  }));

  it('should equal RmResource', () => {
    expect(provider).to.equal('RmResource');
  });
});
