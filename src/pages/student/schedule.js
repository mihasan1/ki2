import React from "react";
import { Container, Title, Content, Box } from "bloomer";

import { useStaticQuery, graphql } from "gatsby";

import Layout from "./../../layouts/Layout";

const Schedule = ({ location }) => {
	const { html } = useStaticQuery(graphql`
		query {
			markdownRemark(fileAbsolutePath: {regex: "/schedule/"}) {
				html
			}
		}
	`).markdownRemark;

	return (
		<Layout location={location} >
			<Container>
				<Box>
					<Content>
						<div dangerouslySetInnerHTML={{ __html: html }} />
					</Content>
				</Box>
			</Container>
		</Layout>
	);
}

export default Schedule;
