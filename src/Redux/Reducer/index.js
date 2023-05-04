import {
	SINGUP_FAIL,
	SINGUP_LOADING,
	SINGUP_SUCCESS,
} from 'Redux/Action/actionType';

const initialStates = {
	loading: false,
	error: null,
	message: {},
};

export const singUpReducer = (state = initialStates, action) => {
	switch (action.type) {
		case SINGUP_LOADING:
			return {
				loading: true,
				error: null,
				message: {},
			};
		case SINGUP_FAIL:
			return {
				loading: false,
				error: action.payload,
				message: {},
			};
		case SINGUP_SUCCESS:
			return {
				loading: false,
				error: null,
				message: action.payload,
			};

		default:
			return state;
	}
};
