import axios from 'axios';

const { createSlice } = require('@reduxjs/toolkit');

export const singUp = async (data) => {
	const res = await axios.post('localhost:5000/api/v1/auth/registe', data);

	return res.data.Promise;
};

export const parsist = async (token) => {
	const res = await axios.get('http://localhost:5000/api/v1/auth/me', {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Basic ${token}`,
		},
	});

	return res.data;
};

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: {},
		users: [],
		token: null,
		loading: true,
		error: null,
	},
	reducers: {
		setLogin: (state, action) => {
			state.token = action.payload.token;
		},
	},
});

export const { setLogin } = authSlice.actions;

export default authSlice.reducer;
