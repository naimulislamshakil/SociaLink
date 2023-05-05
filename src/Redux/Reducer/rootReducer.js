import {
	createPostReducer,
	meReducer,
	singInReducer,
	singUpReducer,
} from './index';

const { combineReducers } = require('redux');

const rootReducer = combineReducers({
	singUp: singUpReducer,
	singIn: singInReducer,
	me: meReducer,
	createPost: createPostReducer,
});

export default rootReducer;
