const path = require("path");
const fs = require('fs');

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

const getFlatPagePaths = data => getPagePaths(data).flat().map(pathObj => pathObj.path);

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
	
	const RawMarkdownPage = path.resolve("./src/components/RawMarkdownPage.jsx")
	const menu = JSON.parse(
		fs.readFileSync(
			path.resolve("./src/data/navbar.json")
			)
	).menu;
	const paths = getFlatPagePaths(menu);
	
	paths.forEach(_path => {
		if(fs.existsSync(
				path.resolve(`./src/pages${_path}.js`))
		) {
			console.info(`Pages "${_path}" exist`);
			return;
		}
		
		if(fs.existsSync(
				path.resolve(`./src/data${_path}.md`))
		) {
			createPage({
				path: _path,
				component: RawMarkdownPage,
				context: {},
			});
			console.info(`Pages "${_path}" was creating.`);
			return;
		}
		
		console.error(`${_path} => 404`);
	});
}