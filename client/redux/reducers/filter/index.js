const initialState = {
  searchText: ''
};

export default function filterSearch(state = initialState, action) {
  switch(action.type){
    case 'FILTER_ITEM':
      return {
        ...state,
        searchText: action.text
      }
    default:
      return state;
  }
}
