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
	},
});

export const { setLogin, setSingUp, userParsist } = authSlice.actions;

export default authSlice.reducer;
