import { Action } from "./../../../types";

const setDescription: Symbol = Symbol("setDescription");
const setTitle: Symbol = Symbol("setTitle");
const setError: Symbol = Symbol("setError");
const setType: Symbol = Symbol("setType");
const setResponseStatusOK: Symbol = Symbol("setResponseStatus");
const toggleIsLoading: Symbol = Symbol("toggleIsLoading");
const reset: Symbol = Symbol("reset");

const setDescriptionCreators = (payload: string): Action => ({
	type: setDescription,
	payload,
});

const setTitleCreators = (payload: string): Action => ({
	type: setTitle,
	payload,
});

const setErrorCreators = (payload: boolean): Action => ({
	type: setTitle,
	payload,
});

const setTypeCreators = (payload: string): Action => ({
	type: setType,
	payload,
});

const setResponseStatusOKCreators = (payload: boolean): Action => ({
	type: setResponseStatusOK,
	payload,
});

const toggleIsLoadingCreators = (payload: boolean): Action => ({
	type: toggleIsLoading,
	payload,
});

const resetCreators = (): Action => ({
	type: reset,
});

export {
	setDescription,
	setTitle,
	setError,
	setType,
	setResponseStatusOK,
	toggleIsLoading,
	reset,
	// creators
	setDescriptionCreators,
	setTitleCreators,
	setErrorCreators,
	setTypeCreators,
	setResponseStatusOKCreators,
	toggleIsLoadingCreators,
	resetCreators,
};
