const { createSlice } = require('@reduxjs/toolkit');

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: null,
		post: [],
		token: null,
		loading: true,
		error: null,
		message: null,
		singleUser: null,
		posts: [],
	},
	reducers: {
		setLogin: (state, action) => {
			state.token = action.payload.token;
			state.user = action.payload.user;
		},
		setSingUp: (state, action) => {
			state.message = action.payload.message;
		},
		userParsist: (state, action) => {
			state.user = action.payload.user;
		},
		getPost: (state, action) => {
			state.post = action.payload.post;
		},
		singleUser: (state, action) => {
			state.singleUser = action.payload.singleUser;
			state.posts = action.payload.singlePost;
		},
		setLogout: (state, action) => {
			state.token = null;
			state.user = null;
		},
	},
});

export const {
	setLogin,
	setSingUp,
	userParsist,
	getAllUser,
	getPost,
	setLogout,
	singleUser,
} = authSlice.actions;

export default authSlice.reducer;
