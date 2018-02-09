import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Button from './index';

describe.only('Button', () => {
  let wrapper;
  const buttonName = 'Add Item'
  const className = 'addBtn'
  const onClick = sinon.spy()
  beforeEach(() => {
    wrapper = shallow( <Button className={className} onClick={onClick}>{buttonName}</Button>)
  });
  describe.only('button', () => {
    it('expects class name to be correct', () => {
      expect(wrapper.find('button').prop('className')).to.equal('addBtn');
    });
    it('expects button name to be correct', () => {
      expect(wrapper.find('button').prop('children')).to.equal('addBtn');
    });
  });
});
