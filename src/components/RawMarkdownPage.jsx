import React from "react";
import { graphql } from "gatsby";

import RawMarkdown from "./RawMarkdown";

import Layout from "./../layouts/Layout";

const RawMarkdownPage = ({ data }) => {
	const { markdownRemark } = data;
	const { html } = markdownRemark;

	return (
		<Layout>
			<RawMarkdown html={html} />
		</Layout>
	)
}

export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: {
			path: { eq: $path } 
		}) {
			html
		}
	}
	
`;

export default RawMarkdownPage;