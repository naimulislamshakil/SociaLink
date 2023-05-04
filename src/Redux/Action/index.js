import axios from 'axios';
import { SINGUP_FAIL, SINGUP_LOADING, SINGUP_SUCCESS } from './actionType';

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
			payload: res.data,
		});
	} catch (error) {
		dispatch({
			type: SINGUP_FAIL,
			payload: error?.message,
		});
	}
};
