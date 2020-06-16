import React from "react";

import { Helmet } from "react-helmet";

import { menu } from "./../page_data/navbar.json";

import { findMetaByPath, process } from "./../components";

const Head = ({ path }) => {
	const obj = findMetaByPath(process(menu))(path);

	const title = obj?.title ?? "";
	const description =
		obj?.description ?? `Київський авіаційний технікум | ${title}`;

	return (
		<Helmet>
			<title>Київський авіаційний технікум | {title} </title>
			<meta charset="utf-8" />
			<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
			<meta name="description" content={description} />
			<meta
				name="keywords"
				content="Київський авіаційний технікум, Київський, авіаційний технікум, сайт, КАТ, КіАТ, киат"
			/>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="robots" content="all" />
			<meta name="Author" content="Київський авіаційний технікум" />
			<meta name="Copyright" content="Київський авіаційний технікум" />
			<meta name="google" content="notranslate" />
		</Helmet>
	);
};

export default Head;
