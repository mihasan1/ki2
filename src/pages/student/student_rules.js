import React from "react";
import { Container, Title, Content, Heading } from "bloomer";

import { useStaticQuery, graphql } from "gatsby";

import Layout from "./../../layouts/Layout";

const StudentRules = ({ location }) => {
	const { html } = useStaticQuery(graphql`
		{
			markdownRemark(fileAbsolutePath: {regex: "/student_rules/"}) {
				html
			}
		}
	`).markdownRemark;

	return (
		<Layout location={location} >
			<Container>
				<Content>
					<div dangerouslySetInnerHTML={{ __html: html }} />
				</Content>
			</Container>
		</Layout>
	);
}

export default StudentRules;
