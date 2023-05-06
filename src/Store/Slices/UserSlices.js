const { createSlice } = require('@reduxjs/toolkit');

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: {},
		users: [],
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
		getAllUser: (state, action) => {
			state.users = action.payload;
		},
	},
});

export const { setLogin, setSingUp, userParsist, getAllUser } =
	authSlice.actions;

export default authSlice.reducer;
