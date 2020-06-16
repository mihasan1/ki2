import React from "react";
import { Cloud, Airplane } from "./../components/SkyObjects";

import Layout from "./../layouts/Layout";

const Clouds = ({ children }) => <div className="clouds">{children}</div>;

const IndexPage = ({ location }) => (
	<Layout location={location} >
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
