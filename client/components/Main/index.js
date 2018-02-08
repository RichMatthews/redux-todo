import React from 'react';
import { connect } from 'react-redux';
import {
  addItem,
  packItem,
  removeItem,
  markAllAsUnpacked,
  filterItem
  } from '../../redux/actions';
import Items from '../Items';
import Error from '../Error';
import Filter from '../Filter';

export class Container extends React.Component {

   state = {
     inputValue: '',
     errorMessageShown: false
   }

   handleInput = e => {
     this.setState({inputValue: e.target.value})
     this.setState({errorMessageShown: false})
   }

   itemAlreadyAdded = item => {
     return this.props.items.find(i => i.name === item) ? true : false
   }

   addTheItem = item => {
     return this.itemAlreadyAdded(item) ? this.setState({errorMessageShown: true}) : this.props.addItem(item)
   }

   clearInput = () => {
     this.setState({ inputValue: '' })
   }

   usingEnterKey = (event, item) => {
    if (event.which == 13 || event.keyCode == 13) {
        this.addTheItem(item);
        this.clearInput();
        return false;
    }
        return true;
    };

   render() {
     const { items, addItem, packItem, removeItem, markAllAsUnpacked } = this.props;
     const { inputValue, errorMessageShown } = this.state;
     const packed = items.filter(item => item.packed === true)
     const unpacked = items.filter(item => !item.packed === true)
     return(
       <div>
        <h1>Items</h1>
        <input
          className="itemInput"
          onChange={this.handleInput}
          onKeyPress={(event) => this.usingEnterKey(event, inputValue)}
          value={inputValue}
        />
        <button
          className="addBtn"
          onClick={() => {this.addTheItem(inputValue); this.clearInput()}}
          >
          Add Item
        </button>
        {errorMessageShown ? <Error /> : null}
        <h3> Unpacked {`(${unpacked.length})`} </h3>
          <Items
            items={unpacked}
            packItem={packItem}
            removeItem={removeItem}
          />
        <h3> Packed {`(${packed.length})`} </h3>
          <Items
            items={packed}
            packItem={packItem}
            removeItem={removeItem}
          />
        <button className="markAllAsUnpacked" onClick={markAllAsUnpacked}>Mark all as unpacked</button>
       </div>
     )
   }
}

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  addItem: (item) => {
    dispatch(addItem(item));
  },
  packItem: (item) => {
    dispatch(packItem(item));
  },
  removeItem: (item) => {
    dispatch(removeItem(item));
  },
  markAllAsUnpacked: (item) => {
    dispatch(markAllAsUnpacked(item));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
