import React from "react";
import Cloud from "./../components/Cloud";

const IndexPage = () => (
	<div>
		<Cloud isSize="medium" isSpeed="slower" />
		<Cloud isSize="massive" isSpeed="slowest" />
		<Cloud isSize="medium" isSpeed="slow" />
		<Cloud isSize="big" isSpeed="super-slow" />
	</div>
);

export default IndexPage;