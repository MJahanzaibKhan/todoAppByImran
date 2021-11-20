import {combineReducers} from 'redux'
import {addValues} from './Reducers'

const rootReducer = combineReducers({
  val: addValues
});

export default rootReducer;
