import { singInReducer, singUpReducer } from './index';

const { combineReducers } = require('redux');

const rootReducer = combineReducers({
	singUp: singUpReducer,
	singIn: singInReducer,
});

export default rootReducer;
