import React from "react";
import { Container, Title, Content, Box } from "bloomer";

import { useStaticQuery, graphql } from "gatsby";

import Layout from "./../../layouts/Layout";

import RawMarkdownPage from "./../../components";

const StudentRules = ({ location }) => {
	const { html } = useStaticQuery(graphql`
		query {
			markdownRemark(fileAbsolutePath: {regex: "/student_rules/"}) {
				html
			}
		}
	`).markdownRemark;

	return (
		<Layout location={location} >
			<RawMarkdownPage html={html}/> 
		</Layout>
	);
}

export default StudentRules;
