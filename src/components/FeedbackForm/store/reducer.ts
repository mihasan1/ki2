import { initialState } from "./formData";

import { maxTitleLen } from "./../utils";

import { Action } from "./../../../types";
import { FeedbackFormState, ResponseStatusOK } from "./types";

export const reducer = (
	state: FeedbackFormState = initialState,
	action: Action,
) => {
	switch (action.type) {
		case "setTitle": {
			const title = action.payload;

			return {
				...state,
				title,
				errorStatus: maxTitleLen - title.length < 0,
			};
		}
		case "setDescription":
			return {
				...state,
				description: action.payload,
			};
		case "setType":
			return {
				...state,
				type: action.payload,
			};
		case "setResponseStatusOK": {
			const responseStatusOK: ResponseStatusOK = action.payload;

			return {
				...state,
				responseStatusOK,
			};
		}
		case "toggleIsLoading":
			return {
				...state,
				isLoading: action.payload,
			};
		case "reset":
			return { ...initialState };
		default:
			throw new Error();
	}
};
