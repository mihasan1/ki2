import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

import { menu } from "./../page_data/navbar.json";

import { findMetaByPath, process } from "./../components";

export interface SiteMetadata {
	defaultTitle: string;
	defaultDescription: string;
	siteUrl: string;
	titleTemplate: string;
}

const SEO = ({ pathname = "" }) => {
	const { site } = useStaticQuery(query);
	const {
		defaultDescription,
		defaultTitle,
		siteUrl,
		titleTemplate,
	} = site.siteMetadata as SiteMetadata;

	const pageMeta = findMetaByPath(process(menu))(pathname);

	const seo = {
		title: pageMeta?.title ?? defaultTitle,
		description: pageMeta?.description ?? defaultDescription,
		url: `${siteUrl}${pathname}`,
	};

	return (
		<Helmet title={seo.title} titleTemplate={titleTemplate}>
			<html lang="uk_UA" />

			<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
			<meta name="description" content={seo.description} />

			{seo.url && <meta property="og:url" content={seo.url} />}
			{seo.title && <meta property="og:title" content={seo.title} />}
			{seo.description && (
				<meta property="og:description" content={seo.description} />
			)}

			<meta
				name="keywords"
				content="Київський авіаційний технікум, Київський, авіаційний технікум, сайт, КАТ, КіАТ, киат"
			/>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="robots" content="all" />
			<meta name="Author" content="Київський авіаційний технікум" />
			<meta name="Copyright" content="Київський авіаційний технікум" />
			<meta name="google" content="notranslate" />
			<meta
				name="google-site-verification"
				content="vhihO45YdckDZzt3kbUGzzm56NK61QO1ri2SbcmN-qQ"
			/>
			{/* Include Font Awesome 5 */}
			<link
				rel="stylesheet"
				href="https://use.fontawesome.com/releases/v5.13.1/css/all.css"
			/>
		</Helmet>
	);
};

const query = graphql`
	query SEO {
		site {
			siteMetadata {
				defaultTitle
				defaultDescription
				siteUrl
				titleTemplate
			}
		}
	}
`;

export default SEO;
