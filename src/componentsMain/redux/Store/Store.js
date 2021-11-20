import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import rootReducer from '../Reducers/rootReducer';

const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;