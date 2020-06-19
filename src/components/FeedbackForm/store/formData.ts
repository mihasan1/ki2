import { FeedbackFormState } from "./types";

export const initialState: FeedbackFormState = {
	title: "",
	description: "",
	errorStatus: false,
	type: "bug",
	responseStatusOK: null,
	isLoading: false,
};
