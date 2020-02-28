import React from "react";
import Link from "gatsby-link";
import { NavbarItem } from "bloomer";

const LinkTab = ({ path, description }) => (
	<NavbarItem href="#">
		<Link to={path} activeClassName="has-text-success">
			{description}
		</Link>
	</NavbarItem>
);

export default LinkTab;
