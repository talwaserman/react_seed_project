import * as CONST from './consts';

const DEFAULT_STATE = {
  searchTerm: '123456'
};

const SearchReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case CONST.SET_SEARCH_TERM:
      return Object.assign({}, state, { searchTerm: action.payload.target.value });
    case CONST.CLEAR_SEARCH_TERM:
      return Object.assign({}, state, { searchTerm: '' });
    default:
      return state;
  }
};

export default SearchReducer;
