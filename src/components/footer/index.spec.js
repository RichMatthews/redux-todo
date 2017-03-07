import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme'
import ReactTestUtils from 'react-addons-test-utils'
const chai = require('chai');

import Footer from './';
chai.use(chaiEnzyme());

describe('footer component', () => {
  let renderedOutput;
  let component;
  let searchButton;
  let logInButton;
  beforeEach(() => {
    component = ReactTestUtils.renderIntoDocument(<Footer />);
    renderedOutput = mount(<Footer />)
  });

  describe('initial state', () => {
    it('renders the footer', () => {
      expect(renderedOutput).to.be.present();
    });
  });

  describe('included components', () => {
    beforeEach(() => {

    });
  });

  describe('links', () => {
    let socialMedia;
    beforeEach(() => {
      socialMedia = renderedOutput.find('footer');
      searchButton.simulate('click');
    });
      // it('links to facebook', () => {
      //   const fbButton = renderedOutput.find('#facebook');
      //   fbButton.simulate('click');
      //   expect(socialMedia.prop('href')).to.eq("https://www.fb.com");
      // });
      // it('links to twitter', () => {
      //   const twButton = renderedOutput.find('#twitter');
      //   twButton.simulate('click');
      //   expect(socialMedia.prop('href')).to.eq("https://www.fb.com");
      // });
      // it('links to pinterest', () => {
      //   const piButton = renderedOutput.find('#pinterest');
      //   piButton.simulate('click');
      //   expect(socialMedia.prop('href')).to.eq("https://www.fb.com");
      // });
  });
});
