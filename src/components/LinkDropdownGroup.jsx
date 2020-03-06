import React from "react";
import { NavbarItem, NavbarDropdown } from "bloomer";

import NavbarLink from "./NavbarLink";

const LinkDropdownGroup = ({ path, description, icon_name, children }) => (
    <NavbarItem hasDropdown isHoverable>
	    <NavbarLink path={path} description={description} icon_name={icon_name} />
	    <NavbarDropdown>
			{
				children
			}
	    </NavbarDropdown>
	</NavbarItem>
);

export default LinkDropdownGroup;