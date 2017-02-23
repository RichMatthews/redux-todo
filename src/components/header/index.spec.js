import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme'
const chai = require('chai');

import Header from './';
import Search from './components/search'
chai.use(chaiEnzyme());

describe('header component', () => {
  let renderedOutput;
  beforeEach(() => {
    renderedOutput = mount(<Header />)
  })

  describe('initial state', () => {
    it('renders the header', () => {
      expect(renderedOutput).to.be.present();
    });
  })

  describe('included components', () => {
    it('should have a button', () => {
      expect(renderedOutput.find('button')).to.have.length(1);
    });
    it('includes search', () => {
      expect(renderedOutput.find(Search)).to.be.present();
    })
  })
});
