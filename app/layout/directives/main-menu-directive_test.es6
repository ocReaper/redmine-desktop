/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe.skip('mainMenu', () => {
  let scope
    , element;

  beforeEach(module('layout', 'layout/directives/main-menu-directive.tpl.html'));

  beforeEach(inject(($compile, $rootScope) => {
    scope = $rootScope.$new();
    element = $compile(angular.element('<main-menu></main-menu>'))(scope);
  }));

  it('should have correct text', () => {
    scope.$apply();
    expect(element.isolateScope().mainMenu.name).to.equal('mainMenu');
  });
});
