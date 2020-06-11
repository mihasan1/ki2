module.exports = {
	siteMetadata: {
		title: 'Київський авіаційний технікум',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `news`,
				path: `${__dirname}/src/data/news`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `page_files`,
				path: `${__dirname}/src/data`,
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
         		}
					},
				]
			},
		},
	],
};
