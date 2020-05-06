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
		query {
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
			<Column isSize="1/2">
				<NewsPreview html={html} {...frontmatter} key={index} />
			</Column>
		);
	});

	return (
		<Layout location={location}>
			<Container>
				<Columns isGrid isMultiline isCentered>
					{news}
				</Columns>
			</Container>
		</Layout>
	);
};

export default MainPage;
