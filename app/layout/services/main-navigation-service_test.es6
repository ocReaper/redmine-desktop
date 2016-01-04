/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe.skip('MainNavigation', () => {
  let service;

  beforeEach(module('layout'));

  beforeEach(inject((MainNavigation) => {
    service = MainNavigation;
  }));

  it('should equal MainNavigation', () => {
    expect(service.get()).to.equal('MainNavigation');
  });
});
