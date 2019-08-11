import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as predictReducer } from '../pages/predict/store';

const reducer = combineReducers({
  home: homeReducer,
  predict: predictReducer,
});

export default reducer;
