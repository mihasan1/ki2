import React from "react";

import { Helmet } from "react-helmet";

import { menu } from "./../data/navbar.json";

import { findTitleByPath, process } from "./../components"; 

const Head = ({ path }) => {
	const subtitle = findTitleByPath(
		process(menu)
	)(path)?.description;
	const title = subtitle ? `| ${subtitle}` : "";
	
	return (
		<Helmet>
			<title>Київський авіаційний технікум {title} </title>
			<meta charset="utf-8" />
			<meta name="description" content="Київський авіаційний технікум" />
			<meta name="keywords" content="Київський авіаційний технікум, Київський авіаційний технікум сайт, КАТ, КіАТ" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		</Helmet>
	)
}

export default Head;