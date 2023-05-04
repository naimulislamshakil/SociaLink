import { meReducer, singInReducer, singUpReducer } from './index';

const { combineReducers } = require('redux');

const rootReducer = combineReducers({
	singUp: singUpReducer,
	singIn: singInReducer,
	me: meReducer,
});

export default rootReducer;
