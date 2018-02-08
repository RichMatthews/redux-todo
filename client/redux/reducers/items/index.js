const initialState = [];

export default(state = initialState, action) => {
  switch(action.type){
    case 'ADD_ITEM': {
      return [].concat(state).concat(action.data)
    }
    case 'REMOVE_ITEM': {
      return state.filter(item => item.name !== action.data.name)
    }
    case 'MARK_ALL_AS_UNPACKED': {
      return state.map(item => ( {...item, packed: false} ))
    }
    case 'TOGGLE_ITEM': {
      return state.map(item => item.name === action.data.name ? {...item, packed: !item.packed} : item )
    }
    default:
      return state;
  }
}
