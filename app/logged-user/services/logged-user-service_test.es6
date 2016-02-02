/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe.skip('LoggedUser', () => {
  let service;

  beforeEach(module('loggedUser'));

  beforeEach(inject((LoggedUser) => {
    service = LoggedUser;
  }));

  it('should equal LoggedUser', () => {
    expect(service.get()).to.equal('LoggedUser');
  });
});
