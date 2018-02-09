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
import Button from '../Button';
import './index.scss';

export class Container extends React.Component {

   state = {
     inputValue: '',
     errorMessageShown: false,
     filterValue: ''
   }

   handleInput = e => {
     this.setState({inputValue: e.target.value})
     this.setState({errorMessageShown: false})
   }

   handleFilterInput = e => {
     this.setState({filterValue: e.target.value})
   }

   itemAlreadyAdded = item => {
     return this.props.items.find(i => i.name === item) ? true : false
   }

   addTheItem = item => {
     this.clearInput();
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

    filterList = (items) => {
      return items.filter(item => item.name.startsWith(this.state.filterValue))
    }

   render() {
     const { items, addItem, packItem, removeItem, markAllAsUnpacked, filter } = this.props;
     const { inputValue, errorMessageShown } = this.state;
     const packed = this.filterList(items).filter(item => item.packed === true)
     const unpacked = this.filterList(items).filter(item => !item.packed === true)
     return(
       <div className="mainBody">
        <h1>Items</h1>
        <div>
          <input
            className="itemInput"
            onChange={this.handleInput}
            onKeyPress={(event) => this.usingEnterKey(event, inputValue)}
            value={inputValue}
          />
        </div>
        <div className="addItem">
          <Button
            className="addBtn"
            onClick={() => {this.addTheItem(inputValue)}}
          >Add Item
          </Button>
        </div>
        <div className="errors">
          {errorMessageShown ? <Error /> : null}
        </div>
        <div className="items">
          <h3> Unpacked {`(${unpacked.length})`} </h3>
            <Filter
              text="filter list"
              onChange={this.handleFilterInput}
            />
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
        </div>
        <div className="markAllAsUnpacked">
          <Button
            className="markAllAsUnpackedBtn"
            onClick={markAllAsUnpacked}
          >Mark all as unpacked
          </Button>
        </div>
       </div>
     )
   }
}

const mapStateToProps = state => ({
  items: state.items,
  filter: state.items.filter(item => item.name.startsWith(state.searchText))
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
  },
  filterItem: (text) => {
    dispatch(filterItem(text))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
