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
		// setPost: (state, action) => {
		// 	const updatedPosts = state.post.map((post) => {
		// 		if (post._id === action.payload.post._id) return action.payload.post;
		// 		return post;
		// 	});
		// 	state.posts = updatedPosts;
		// },
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
} = authSlice.actions;

export default authSlice.reducer;
