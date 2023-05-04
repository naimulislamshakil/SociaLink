import axios from 'axios';
import { SINGUP_FAIL, SINGUP_LOADING, SINGUP_SUCCESS } from './actionType';

export const singUpAction = () => async (dispatch) => {
	try {
		dispatch({
			type: SINGUP_LOADING,
		});

		const res = await axios.post('https://test-backend-2-6d1b.vercel.app/data');

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
