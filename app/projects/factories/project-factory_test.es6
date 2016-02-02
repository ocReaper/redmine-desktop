/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe.skip('Project', () => {
  let factory;

  beforeEach(module('projects'));

  beforeEach(inject((Project) => {
    factory = Project;
  }));

  it('should have someValue be Project', () => {
    expect(factory.someValue).to.equal('Project');
  });

  it('should have someMethod return Project', () => {
    expect(factory.someMethod()).to.equal('Project');
  });
});
