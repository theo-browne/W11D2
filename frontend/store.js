import rootReducer from './reducers/root_reducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export default function configureStore(state = {}){
  return createStore(rootReducer, state, applyMiddleware(thunk, logger));
}