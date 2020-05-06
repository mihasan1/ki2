import React from "react";

import { graphql } from "gatsby";

import { 
	Image,
	Content,
	Box,
	Title,
	Container,
} from "bloomer";

import Layout from "./../layouts/Layout";

const NewsTemplate = ({ data, location }) => {
	const { markdownRemark } = data;
	const { frontmatter, html } = markdownRemark;
	const { title, date, path } = frontmatter;

	return (
		<Layout location={location}>
			<Container>
				<Box>
					<Box>
						<Title isSize={4} tag="h4">
							# { !!title ? title : "Новина без назви - просто новина" }
						</Title>
					</Box>
					<Box>
						<Content>
							<div
								dangerouslySetInnerHTML={{ __html: html }}
							/>
							<br/>
						</Content>
						
						<small>Дата публікації: <time>{date}</time></small>
					</Box>
				</Box>
			</Container>
		</Layout>
	);
}

export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: {
			path: { eq: $path } 
		}) {
			html
			frontmatter {
				date(formatString: "D MMMM, YYYY", locale: "uk_UA")
				path
				title
			}
		}
	}
`

export default NewsTemplate;