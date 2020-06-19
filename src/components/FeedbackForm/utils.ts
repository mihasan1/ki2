import { Issue } from "./../../types";

export const maxTitleLen = 100;

export const createIssue = async ({
	title,
	description,
	type,
}: Issue): Promise<Response> => {
	const repo = "ki2";
	const owner = "faramozzayw";

	const url = `https://api.github.com/repos/${owner}/${repo}/issues`;

	const token = process.env.REACT_APP_AUTH_TOKEN;
	console.info(token ? "Token exist" : "Token status: wtf?");

	return fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({
			title: title,
			body: description,
			labels: [type],
		}),
	});
};
