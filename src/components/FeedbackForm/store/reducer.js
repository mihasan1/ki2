import { initialState } from "./formData";

import {
	setDescription,
	setTitle,
	setError,
	setType,
	setResponseStatusOK,
	toggleIsLoading,
	reset,
} from "./action";

import { maxTitleLen } from "./../utils";

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case setTitle: {
			const title = action.payload;

			return {
				...state,
				title,
				errorStatus: state.errorStatus || maxTitleLen - title.length < 0,
			};
		}
		case setDescription:
			return {
				...state,
				description: action.payload,
			};
		case setType:
			return {
				...state,
				type: action.payload,
			};
		case setResponseStatusOK: {
			const responseStatusOK = action.payload;

			return {
				...state,
				responseStatusOK,
			};
		}
		case toggleIsLoading:
			return {
				...state,
				isLoading: action.payload,
			};
		case reset:
			return { ...initialState };
		default:
			throw new Error();
	}
};
