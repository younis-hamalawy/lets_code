import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import CitiesReducer from './cities_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  cities: CitiesReducer
});

export default rootReducer;
