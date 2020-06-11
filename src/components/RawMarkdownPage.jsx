import React from "react";
import { graphql } from "gatsby";

import { RawMarkdown } from "./index";

import Layout from "./../layouts/Layout";

const RawMarkdownPage = ({ location, data }) => {
	const { markdownRemark } = data;
	const html = markdownRemark?.html ?? "Щось погане трапилось!";

	return (
		<Layout location={location}>
			<RawMarkdown html={html} />
		</Layout>
	)
}

export const pageQuery = graphql`
	query($page: String!) {
		markdownRemark(fileAbsolutePath: 
			{ regex: $page }
		) {
			html
		}
	}
`;

export default RawMarkdownPage;