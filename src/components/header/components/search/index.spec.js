import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import chaiEnzyme from 'chai-enzyme';
import ReactTestUtils from 'react-addons-test-utils';
const chai = require('chai');

import Search from './'
chai.use(chaiEnzyme());

describe('search component', () => {
  let renderedOutput;
  let searchButton;
  let handleSearchStub;
  beforeEach(() => {
    handleSearchStub = sinon.stub();
    renderedOutput = mount(<Search />)
  });

  describe('initial state', () => {
    it('renders the search', () => {
      expect(renderedOutput).to.be.present();
    });
  });

  describe('included components', () => {
    it('includes search', () => {
      expect(renderedOutput.find(Search)).to.be.present(); //THIS IS JUST TESTING HEADER (UNIT TEST)
    });
  });

  describe('checks components are called', () => {
    it.only('calls handleSearch', () => {
      searchButton = renderedOutput.find('button').at(0);
      searchButton.simulate('click');
      expect(handleSearchStub).to.have.been.called;
    });
  });

  describe('works', () => {
    it('works', () => {

    });
  });
});
