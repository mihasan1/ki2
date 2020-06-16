import React from "react";

import { Helmet } from "react-helmet";

import { menu } from "./../page_data/navbar.json";

import { findTitleByPath, process } from "./../components"; 

const Head = ({ path }) => {
	const subtitle = findTitleByPath(
		process(menu)
	)(path)?.title;
	
	const title = subtitle ? `| ${subtitle}` : "";
	
	return (
		<Helmet>
			<title>Київський авіаційний технікум {title} </title>
			<meta charset="utf-8" />
			<meta
				http-equiv="Content-Type"
				content="text/html; charset=UTF-8"
			/>
			<meta 
				name="description"
				content={`Київський авіаційний технікум ${title}`}
			/>
			<meta
				name="keywords"
				content="Київський авіаційний технікум, Київський, авіаційний технікум, сайт, КАТ, КіАТ, киат" 
			/>
			<meta
				name="viewport" 
				content="width=device-width, initial-scale=1.0"
			/>
			<meta
				name="robots"
				content="all"
			/>
			<meta
				name="Author"
				content="Київський авіаційний технікум" 
			/>
			<meta 
				name="Copyright"
				content="Київський авіаційний технікум"
			/>
			<meta
				name="google"
				content="notranslate"
			/>
			
		</Helmet>
	)
}

export default Head;