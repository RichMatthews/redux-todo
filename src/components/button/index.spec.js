import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
const chai = require('chai');
const sinonChai = require("sinon-chai");
chai.use(chaiEnzyme());
chai.use(sinonChai);

import Button from './';

describe('do something', () => {
  let renderedOutput;
  let channelClickStub;
  beforeEach(() => {
    channelClickStub = sinon.stub();
    renderedOutput = mount(<Button channelClick={channelClickStub}/>);
  });

  it('should be present', () => {
    expect(renderedOutput).to.be.present();
  });

  // it('returns a button', () => {
  //
  // });
  //
  // it('take a text prop', () => {
  //
  // });
  //
  it('calls handleClick', () => {
    const btn = renderedOutput.find('.buttonComponent');
    btn.simulate('click');
    expect(channelClickStub).to.have.been.called;
  });
});
