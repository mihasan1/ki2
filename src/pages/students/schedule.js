import React from "react";
import { Container, Title, Content, Box } from "bloomer";

import { useStaticQuery, graphql } from "gatsby";

import Layout from "./../../layouts/Layout";
import { RawMarkdown } from "./../../components";

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
			<RawMarkdown html={html}/>
		</Layout>
	);
}

export default Schedule;
