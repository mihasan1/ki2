export type ResponseStatusOK = boolean | null;

export interface FeedbackFormState {
	title: string;
	description: string;
	errorStatus: boolean;
	type: string;
	responseStatusOK: ResponseStatusOK;
	isLoading: boolean;
}
