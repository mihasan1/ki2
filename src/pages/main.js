import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Container, Box } from "bloomer";

import Layout from "./../layouts/Layout";
import NewsPreview from "./../components/NewsPreview";

const MainPage = ({ location }) => {
	const { edges } = useStaticQuery(graphql`
		{
			allMarkdownRemark(filter: {
				frontmatter: {
					path: { ne: null },
					date: { ne: null }
				}
			}) {
				edges {
					node {
						html
						frontmatter {
							date(formatString: "D MMMM, YYYY", locale: "uk_UA")
							path
							title
						}
					}
				}
			}
		}
	`).allMarkdownRemark;

	const news = edges.map(({ node }, index) => {
		let { html, frontmatter } = node;
		return <NewsPreview html={html} {...frontmatter} key={index} />
	});

	return (
		<Layout location={location} >
			<Container>
				<Box>
					{news}
				</Box>
			</Container>
		</Layout>
	);
};

export default MainPage;
