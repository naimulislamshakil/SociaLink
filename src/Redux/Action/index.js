import axios from 'axios';
import {
	ME_FAIL,
	ME_LOADING,
	ME_SUCCESS,
	SINGIN_FAIL,
	SINGIN_LOADING,
	SINGIN_SUCCESS,
	SINGUP_FAIL,
	SINGUP_LOADING,
	SINGUP_SUCCESS,
} from './actionType';

export const singUpAction = (data) => async (dispatch) => {
	try {
		dispatch({
			type: SINGUP_LOADING,
		});

		const res = await axios.post(
			'http://localhost:5000/api/v1/auth/register',
			data
		);

		dispatch({
			type: SINGUP_SUCCESS,
			payload: res?.data,
		});
	} catch (error) {
		dispatch({
			type: SINGUP_FAIL,
			payload: error?.message,
		});
	}
};

export const singInAction = (data) => async (dispatch) => {
	try {
		dispatch({
			type: SINGIN_LOADING,
		});

		const res = await axios.post(
			'http://localhost:5000/api/v1/auth/login',
			data
		);

		dispatch({
			type: SINGIN_SUCCESS,
			payload: res?.data,
		});
	} catch (error) {
		dispatch({
			type: SINGIN_FAIL,
			payload: error?.message,
		});
	}
};

export const meAction = (token) => async (dispatch) => {
	try {
		dispatch({
			type: ME_LOADING,
		});

		const res = await axios.get('http://localhost:5000/api/v1/auth/me', {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Basic ${token}`,
			},
		});

		dispatch({
			type: ME_SUCCESS,
			payload: res?.data,
		});
	} catch (error) {
		dispatch({
			type: ME_FAIL,
			payload: error?.message,
		});
	}
};
