import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { Container } from './index';
import Items from '../Items';
import Error from '../Error';
import Filter from '../Filter';

describe.only('Container', () => {
  const items = [
    {name: 'washing', packed: false},
    {name: 'jumper', packed: false},
    {name: 'trainers', packed: true},
    {name: 'lunchbox', packed: true},
    {name: 'socks', packed: true}
  ]
  const removeItemStub = sinon.spy();
  const addItemStub = sinon.spy();
  const markAllAsUnpackedStub = sinon.spy();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Container
        items={items}
        addItem={addItemStub}
        removeItem={removeItemStub}
        markAllAsUnpacked={markAllAsUnpackedStub}
      />
    )
  });
  describe('title', () => {
    it('expects Title to be Items', () => {
      const heading = wrapper.find('h1');
      expect(heading.text()).to.equal('Items')
    });
  });
  describe('initial state', () => {
    it('should check initial state is empty', () => {
      expect(wrapper.state().inputValue).to.equal('')
    });
    it('should check initial state is value typed in', () => {
      const fakeValue = 'fakeValue';
      wrapper.setState({inputValue: fakeValue})
      expect(wrapper.state().inputValue).to.equal('fakeValue')
    });
  });

  describe('input', () => {
    it('always renders an item input', () => {
      expect(wrapper.find('.itemInput')).to.have.length(1);
    });
  });

  describe('error messages', () => {
    it('should not display an error message initially', () => {
      expect(wrapper.find(Error)).to.have.length(0);
    });
    it('should display an error message when the user tries to add the same item', () => {
      wrapper.setState({errorMessageShown: true})
      expect(wrapper.find(Error)).to.have.length(1);
    });
  });

  describe('components', () => {
    it('expects there to be a filter input search', () => {
      expect(wrapper.find(Filter)).to.have.length(1);
    });
    it('expects there to be a packed and an unpacked list', () => {
      expect(wrapper.find(Items)).to.have.length(2);
    });
    it('should show the correct number of items in the packed list', () => {
      expect(wrapper.find(Items).get(0).props.items.length).to.equal(2);
    });
    it('should show the correct number of items in the unpacked list', () => {
      expect(wrapper.find(Items).get(1).props.items.length).to.equal(3);
    });
    it('should make sure the prop items is are correct', () => {
      expect(wrapper.instance().props.items).to.deep.equal([
        { name: 'washing', packed: false },
        { name: 'jumper', packed: false },
        { name: 'trainers', packed: true },
        { name: 'lunchbox', packed: true },
        { name: 'socks', packed: true }
      ]);
    });
  });

  xit('testing ternary', () => {
    const alreadyExistingItem = {name: 'jumper'}
    wrapper.instance().addTheItem(alreadyExistingItem)
    expect(addItemStub.called).to.equal(true)
  });

  describe('buttons', () => {
    it('expects addItem button to be called', () => {
      wrapper.find('.addBtn').simulate('click');
      expect(addItemStub.called).to.equal(true)
    });
    it('expects markAllAsUnpacked button to be called', () => {
      wrapper.find('.markAllAsUnpacked').simulate('click');
      expect(markAllAsUnpackedStub.called).to.equal(true)
    });
  });
});
