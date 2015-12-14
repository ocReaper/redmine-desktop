/* global describe, beforeEach, it, browser */
'use strict';

import HomePage from './home.po';

let chai = require('chai')
  , chaiAsPromised = require('chai-as-promised')
  , expect = chai.expect;

chai.use(chaiAsPromised);

describe('Home page', () => {
  let homePage;

  beforeEach(() => {
    homePage = new HomePage();
    browser.get('/#/home');
  });

  it('should say HomeCtrl', () => {
    expect(homePage.heading.getText()).to.eventually.equal('home');
    expect(homePage.text.getText()).to.eventually.equal('HomeCtrl');
  });
});
