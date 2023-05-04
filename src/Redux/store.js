import rootReducer from './Reducer/rootReducer';
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk');

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
