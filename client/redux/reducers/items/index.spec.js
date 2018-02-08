import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import reducer from './index';

describe('items reducer', () => {
  it('should return initial state if unknown action passed in', () => {
    const initialState = {};
    const action = { type: 'FAKE_ACTION', data: {} };
    const result = reducer(initialState, action);
    expect(result).to.deep.equal({});
  });

  it('adds an item', () => {
    const initialState = {
      items: [{ name: 'cleaning', packed: true }]
    };
    const fakeItem = [{ name: 'washing', packed: false}]
    const action = { type: 'ADD_ITEM', data: fakeItem };
    const result = reducer(initialState, action);
    expect(result).to.deep.equal({
      items: [{
        name: 'cleaning',
        packed: true
      },
      {
        name: 'washing',
        packed: false
      }]
    });
  });

  it('marks all as unpacked', () => {
    const initialState = {
      items: [
        { name: 'cleaning', packed: true },
        { name: 'washing', packed: false },
        { name: 'drying', packed: true }
      ]
    };
    const action = { type: 'MARK_ALL_AS_UNPACKED' };
    const result = reducer(initialState, action);
    expect(result).to.deep.equal({
      items: [
        { name: 'cleaning', packed: false },
        { name: 'washing', packed: false },
        { name: 'drying', packed: false }
      ]
    });
  });

  it('moves an item to the packed list', () => {
    const initialState = {
      items: [
        { name: 'cleaning', packed: false }
      ]
    };
    const fakeItem = [{ name: 'cleaning', packed: false}]
    const action = { type: 'TOGGLE_ITEM', data: fakeItem };
    const result = reducer(initialState, action);
    expect(result).to.deep.equal({
      items: [
        { name: 'cleaning', packed: true }
      ]
    });
  });

});
