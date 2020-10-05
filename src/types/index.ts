export interface Location {
	pathname: string;
}

export interface LocationObject {
	location: Location;
}

export interface Post {
	title: string;
	date: Date;
	path: string;
}

export interface PageWithLocation {
	location: Location;
}

export interface MarkdownRemark {
	frontmatter: Post;
	html: string;
}

export interface PageConfig {
	path: string;
	title: string;
	icon_name?: string | null;
	child?: PageConfig[] | null;
}

// props
export interface PageMetadata {
	path: string;
	title?: string;
	icon_name?: string;
	children?: React.ReactNode | string;
	description?: string;
}

export interface News {
	title: string;
	date: string;
	path: string;
	html: string;
}

export interface Issue {
	title: string;
	description: string;
	type: string;
}

type Actions =
	| "setDescription"
	| "setTitle"
	| "setError"
	| "setType"
	| "setResponseStatus"
	| "toggleIsLoading"
	| "reset"
	| "setResponseStatusOK";

export interface Action {
	type: Actions;
	payload?: any;
}
