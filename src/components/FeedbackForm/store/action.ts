import { Action } from "./../../../types";

const setDescription = (payload: string): Action => ({
	type: "setDescription",
	payload,
});

const setTitle = (payload: string): Action => ({
	type: "setTitle",
	payload,
});

const setError = (payload: boolean): Action => ({
	type: "setTitle",
	payload,
});

const setType = (payload: string): Action => ({
	type: "setType",
	payload,
});

const setResponseStatusOK = (payload: boolean): Action => ({
	type: "setResponseStatusOK",
	payload,
});

const toggleIsLoading = (payload: boolean): Action => ({
	type: "toggleIsLoading",
	payload,
});

const reset = (): Action => ({
	type: "reset",
});

export {
	setDescription,
	setTitle,
	setError,
	setType,
	setResponseStatusOK,
	toggleIsLoading,
	reset,
};
