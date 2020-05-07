module.exports = {
	siteMetadata: {
		title: 'Gatsby Default Starter',
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
				name: `student_files`,
				path: `${__dirname}/src/data/students`,
			},
		},
		`gatsby-transformer-remark`,
	],
};
