import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import ReactTestUtils from 'react-addons-test-utils';
const chai = require('chai');

import Header from './';
chai.use(chaiEnzyme());

describe('header component', () => {
  let renderedOutput;
  let component;
  let searchButton;

  beforeEach(() => {
    component = ReactTestUtils.renderIntoDocument(<Header />);
    renderedOutput = mount(<Header />)
  });

  describe('initial state', () => {
    it('renders the header', () => {
      expect(renderedOutput).to.be.present();
    });
  });

  describe('included components', () => {
    beforeEach(() => {
      searchButton = renderedOutput.find('button');
    });
    it('checks the button is on', () => {
      expect(searchButton).to.have.text('Search');  //INTEGRATION TESTS
    });
    it('toggles the button', () => {
      searchButton.simulate('click');
      expect(searchButton).to.have.text(''); //INTEGRATION TESTS
    });
  });
});
