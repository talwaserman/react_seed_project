// Action creator
import * as CONST from './consts';

export const setSearchTerm = searchTerm => ({
  type: CONST.SET_SEARCH_TERM,
  payload: searchTerm
});

export const clearSearchTerm = searchTerm => ({
  type: CONST.CLEAR_SEARCH_TERM,
  payload: searchTerm
});
