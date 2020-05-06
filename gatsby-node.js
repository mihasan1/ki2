const path =  require("path");

exports.createPages = async ({ 
	actions,
	graphql,
	reporter,
}) =>  {
	const { createPage } = actions;

	const newsTemplate = path.resolve("./src/template/newsTemplate.jsx");

	const result = await graphql(`
		query {
			allMarkdownRemark(sort: {
				fields: frontmatter___date, 
				order: DESC
			}, filter: {
				frontmatter: {
					path: { ne: null },
					date: { ne: null }
				}
			}) {
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
	`);

	if(result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`);
		return;
	}

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		const { path } = node.frontmatter;

		createPage({
			path,
			component: newsTemplate,
			context: {},
		})
	});
}