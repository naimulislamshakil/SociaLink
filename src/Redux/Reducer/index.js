import {
	CREATE_POST_FAIL,
	CREATE_POST_LOADING,
	CREATE_POST_SUCCESS,
	ME_FAIL,
	ME_LOADING,
	ME_SUCCESS,
	SINGIN_FAIL,
	SINGIN_LOADING,
	SINGIN_SUCCESS,
	SINGUP_FAIL,
	SINGUP_LOADING,
	SINGUP_SUCCESS,
} from 'Redux/Action/actionType';

const initialState = {
	loading: true,
	error: null,
	message: {},
};

export const singUpReducer = (state = initialState, action) => {
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

export const singInReducer = (state = initialState, action) => {
	switch (action.type) {
		case SINGIN_LOADING:
			return {
				loading: true,
				error: null,
				message: {},
			};
		case SINGIN_FAIL:
			return {
				loading: false,
				error: action.payload,
				message: {},
			};
		case SINGIN_SUCCESS:
			return {
				loading: false,
				error: null,
				message: action.payload,
			};

		default:
			return state;
	}
};

export const meReducer = (state = initialState, action) => {
	switch (action.type) {
		case ME_LOADING:
			return {
				...state,
				loading: true,
				error: null,
				message: {},
			};
		case ME_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
				message: {},
			};
		case ME_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				message: action.payload,
			};

		default:
			return state;
	}
};

export const createPostReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_POST_LOADING:
			return {
				loading: true,
				error: null,
				message: {},
			};
		case CREATE_POST_FAIL:
			return {
				loading: false,
				error: action.payload,
				message: {},
			};
		case CREATE_POST_SUCCESS:
			return {
				loading: false,
				error: null,
				message: action.payload,
			};

		default:
			return state;
	}
};
