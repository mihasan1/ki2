import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
	Container,
	Box,
	Columns,
	Column,
} from "bloomer";

import Layout from "./../layouts/Layout";
import NewsPreview from "./../components/NewsPreview";

const MainPage = ({ location }) => {
	const { edges } = useStaticQuery(graphql`
		{
			allMarkdownRemark(sort: {
				fields: frontmatter___date, 
				order: DESC
			}, filter: {
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
		return (
			<Column isSize="1/3">
				<NewsPreview html={html} {...frontmatter} key={index} />
			</Column>
		);
	});

	return (
		<Layout location={location}>
			<Container>
				<Box>
					<Columns isGrid isMultiline isCentered isVCentered>
						{news}
					</Columns>
				</Box>
			</Container>
		</Layout>
	);
};

export default MainPage;
