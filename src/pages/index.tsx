import React from "react";

import { Icon } from "bloomer";

import { Cloud, Airplane } from "./../components/SkyObjects";

import Layout from "./../layouts/Layout";

import { PageWithLocation } from "./../types";

export interface CloudProps {
	children: React.ReactNode;
}

const Clouds: React.FC<CloudProps> = ({ children }) => (
	<div className="clouds">{children}</div>
);

const IndexPage: React.FC<PageWithLocation> = ({ location }) => (
	<Layout location={location}>
		<Airplane />
		<Clouds>
			<Cloud isSize="medium" isSpeed="slower" />
			<Cloud isSize="massive" isSpeed="slowest" isDistance="distant" />
			<Cloud isSize="big" isSpeed="super-slow" />
			<Cloud isSize="big" isSpeed="super-slow" />
			<Cloud isSize="big" isSpeed="super-slow" isDistance="background" />
			<Cloud isSize="medium" isSpeed="slow" />
			<Cloud isSize="big" isSpeed="super-slow" />
		</Clouds>
	</Layout>
);

export default IndexPage;
