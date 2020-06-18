import React from "react";

import { graphql } from "gatsby";

import { Image, Content, Box, Title, Container } from "bloomer";

import Layout from "./../layouts/Layout";

import { RawMarkdown } from "./../components";

const NewsTemplate = ({ data, location }) => {
	const { markdownRemark } = data;
	const { frontmatter, html } = markdownRemark;
	const { title, date, path } = frontmatter;

	return (
		<Layout location={location}>
			<Container>
				<Box>
					<Title isSize={4} tag="h4">
						# {title ?? "Новина без назви - просто новина"}
					</Title>
				</Box>
				<RawMarkdown html={html} />
			</Container>
		</Layout>
	);
};

export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "D MMMM, YYYY", locale: "uk_UA")
				path
				title
			}
		}
	}
`;

export default NewsTemplate;
