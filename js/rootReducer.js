import { combineReducers } from 'redux';

import LandingReducer from './Components/Landing/reducer';
import UserStatusReducer from './Components/AppWrapper/reducer';
export default combineReducers({
  LandingReducer,
  UserStatusReducer
});
