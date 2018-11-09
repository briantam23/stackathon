import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const authReducer = (state = {}, action) => {
    return state;
}
const reducer = combineReducers({
    auth: authReducer
})

export default createStore(reducer, applyMiddleware(logger, thunk));