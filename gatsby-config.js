/*
require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});
*/

module.exports = {
	siteMetadata: {
		title: "Київський авіаційний технікум",
		description: `Київський авіаційний технікум`,
		siteUrl: `https://kiat.now.sh/`,
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		`gatsby-plugin-sitemap`,
		"gatsby-plugin-sass",
		{
			resolve: `gatsby-plugin-env-variables`,
			options: {
				whitelist: ["REACT_APP_AUTH_TOKEN"],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `news`,
				path: `${__dirname}/src/page_data/news`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `page_files`,
				path: `${__dirname}/src/page_data`,
			},
		},
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					`@pauliescanlon/gatsby-remark-sticky-table`,
					`gatsby-remark-copy-linked-files`,
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Київський авіаційний технікум`,
				short_name: `КіАТ`,
				description: `Київський авіаційний технікум - вищий навчальний заклад I рівня акредитації.`,
				lang: `uk_UA`,
				icon: `src/media/logo1.png`,
				start_url: `/`,
				background_color: `#f7f0eb`,
				theme_color: `#a2466c`,
				display: `standalone`,
			},
		},
		`gatsby-plugin-offline`,
	],
};
