const path = require("path");
const fs = require("fs");

// start copypast from ./src/utils.tsx :(

const process = array => {
	return array.map(item => {
		const newItem = { ...item };

		const { child } = newItem;
		const parentPath = newItem.path;

		if (Array.isArray(child)) {
			newItem.child = child.map(({ path, ...other }) => {
				const newPath = parentPath.concat(`/${path}`);

				return {
					path: newPath,
					...other,
				};
			});

			return {
				...newItem,
				child: process(newItem.child),
				path: `/${newItem.path}`,
			};
		} else {
			return {
				...newItem,
				path: `/${parentPath}`,
			};
		}
	});
};

const getPagePaths = array => {
	return array.flatMap(item => {
		if (Array.isArray(item.child)) {
			return getPagePaths(item.child);
		} else {
			return { ...item };
		}
	});
};

// end copypast from ./src/utils.tsx :(

const getFlatPagePaths = data =>
	getPagePaths(process(data)).map(pathObj => pathObj.path);

exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions;

	const newsTemplate = path.resolve("./src/template/newsTemplate.tsx");

	const result = await graphql(`
		query {
			allMarkdownRemark(
				sort: { fields: frontmatter___date, order: DESC }
				filter: {
					frontmatter: { path: { ne: null }, date: { ne: null } }
					fileAbsolutePath: { regex: "/news/" }
				}
			) {
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

	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`);
		return;
	}

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		const { path } = node.frontmatter;

		createPage({
			path,
			component: newsTemplate,
			context: {},
		});
	});

	const RawMarkdownPage = path.resolve(
		"./src/components/RawMD/RawMarkdownPage.tsx",
	);
	const ComingSoonPage = path.resolve("./src/components/ComingSoonPage.tsx");

	const menu = JSON.parse(
		fs.readFileSync(path.resolve("./src/page_data/navbar.json")),
	).menu;
	const paths = getFlatPagePaths(menu);

	console.log("\n\n");

	paths.forEach(_path => {
		if (fs.existsSync(path.resolve(`./src/pages${_path}.tsx`))) {
			console.warn(`Pages "${_path}" exist`);
			return;
		}

		if (fs.existsSync(path.resolve(`./src/page_data${_path}.md`))) {
			const pageContext =
				_path.charAt(0) + _path.slice(1).replace(/\//g, "/") + "/";

			createPage({
				path: _path,
				component: RawMarkdownPage,
				context: {
					page: pageContext,
				},
			});
			console.info(`Pages "${_path}" was creating.`);
			return;
		}

		createPage({
			path: _path,
			component: ComingSoonPage,
			context: {},
		});

		console.info(`${_path} => ComingSoonPage`);
	});

	console.log("\n\n");
};

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
	if (getConfig().mode === "production") {
		actions.setWebpackConfig({
			devtool: false,
		});
	}
};
