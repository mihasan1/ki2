import React from "react";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import { NavbarItem, Icon } from "bloomer";

const NavbarLink = ({ path, title, icon_name, ...others }) => (
	<NavbarItem className={icon_name === "" ? "without-icon" : ""} {...others}>
		<Link to={path} activeClassName="has-text-success">
			{icon_name !== null && <Icon isSize="large" className={icon_name} />}
			{title}
		</Link>
	</NavbarItem>
);

NavbarLink.propTypes = {
	path: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	icon_name: PropTypes.oneOfType([() => null, PropTypes.string]),
};

export default NavbarLink;
