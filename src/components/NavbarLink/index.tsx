import React from "react";
import Link from "gatsby-link";
import { NavbarItem, Icon } from "bloomer";

import classnames from "classnames";

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
	<NavbarItem
		className={classnames({ "without-icon": !icon_name })}
		{...others}
	>
		<Link to={path} activeClassName="has-text-success">
			{icon_name && <Icon isSize="large" className={icon_name} />}
			{title}
		</Link>
	</NavbarItem>
);

export default NavbarLink;
