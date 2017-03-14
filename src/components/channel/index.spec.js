import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
const chai = require('chai');
const sinonChai = require("sinon-chai");
chai.use(chaiEnzyme());
chai.use(sinonChai);

import Channel from './';

describe('do something', () => {
  let renderedOutput;
  let routeStub;
  beforeEach(() => {
    routeStub = sinon.stub();
    renderedOutput = mount(<Channel route={routeStub} />);
  });

  // it('has the text `random`', () => {
  //   const input = renderedOutput.find('#channelHeading');
  //   expect(input).to.equal('random');
  // });
});
