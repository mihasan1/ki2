import React from "react";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import { NavbarItem, Icon } from "bloomer";

const LinkTab = ({ path, description, icon_name }) => (
	<NavbarItem href="/">
		<Link to={path} activeClassName="has-text-success">
			<Icon isSize="large" className={icon_name} />
			{description}
		</Link>
	</NavbarItem>
);

LinkTab.propTypes = {
	path: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default LinkTab;
