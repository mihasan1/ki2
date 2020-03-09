import React from "react";
import Cloud from "./../components/Cloud";
import Airplane from "./../components/Airplane";

const Clouds = ({ children }) => <div className="clouds">{children}</div>;

const IndexPage = () => (
	<div>
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
	</div>
);

export default IndexPage;