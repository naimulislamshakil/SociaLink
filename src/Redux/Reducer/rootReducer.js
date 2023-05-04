import { singUpReducer } from './index';

const { combineReducers } = require('redux');

const rootReducer = combineReducers({
	singUp: singUpReducer,
});

export default rootReducer;
