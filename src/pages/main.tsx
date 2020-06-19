import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Container, Box, Columns, Column } from "bloomer";

import Layout from "./../layouts/Layout";
import { NewsPreview } from "./../components";

import { PageWithLocation } from "./../types";

const MainPage: React.FC<PageWithLocation> = ({ location }) => {
	const { edges } = useStaticQuery(graphql`
		query {
			allMarkdownRemark(
				sort: { fields: frontmatter___date, order: DESC }
				filter: {
					frontmatter: { path: { ne: null }, date: { ne: null } }
					fileAbsolutePath: { regex: "/news/" }
				}
			) {
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

	// @ts-ignore
	const news = edges.map(({ node }, index) => {
		let { html, frontmatter } = node;
		return (
			<Column isSize="1/2" key={index}>
				<NewsPreview html={html} {...frontmatter} />
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
