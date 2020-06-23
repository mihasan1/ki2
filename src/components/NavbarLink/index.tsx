import React from "react";
import Link from "gatsby-link";
import { NavbarItem, Icon } from "bloomer";

export interface NavbarLinkProps {
	path: string;
	title: string;
	icon_name?: string | null;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({
	path,
	title,
	icon_name,
	...others
}) => (
	<NavbarItem className={icon_name === "" ? "without-icon" : ""} {...others}>
		<Link to={path} activeClassName="has-text-success">
			{icon_name && <Icon isSize="large" className={icon_name} />}
			{title}
		</Link>
	</NavbarItem>
);

export default NavbarLink;
