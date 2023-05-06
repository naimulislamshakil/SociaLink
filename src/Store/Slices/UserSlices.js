const { createSlice } = require('@reduxjs/toolkit');

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: {},
		post: [],
		token: null,
		loading: true,
		error: null,
		message: {},
	},
	reducers: {
		setLogin: (state, action) => {
			state.token = action.payload.token;
		},
		setSingUp: (state, action) => {
			state.message = action.payload;
		},
		userParsist: (state, action) => {
			state.user = action.payload;
		},
		createPost: (state, action) => {
			state.post = action.payload;
		},
	},
});

export const { setLogin, setSingUp, userParsist, getAllUser, createPost } =
	authSlice.actions;

export default authSlice.reducer;
