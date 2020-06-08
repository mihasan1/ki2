const path = require("path");

const getPagePaths = array => {
	return array.map(item => {
		const newItem = { ...item };

		const { child } = newItem;
		const parentPath = newItem.path;

		if (Array.isArray(child)) {
			newItem.child = child.map(({ path, ...other }) => {
				const newPath = parentPath.concat(
					`/${path}`
				);

				return { 
					path: newPath, 
					...other 
				};
			});
      
      return getPagePaths(newItem.child)
    } else {
			return {  
        path: `/${parentPath}`
			};
		}
	});
};

const getFlatPagePaths = getPagePaths(data).flat().map(pathObj => pathObj.path);

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
				},
				fileAbsolutePath: { regex: "/news/" }
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