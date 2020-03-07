import React, { useState } from "react";
import { NavbarDropdown, NavbarItem, Icon } from "bloomer";

import NavbarLink from "./NavbarLink";

const LinkDropdownGroup = ({ path, description, icon_name, children }) => {
    const [showStatus, updateShowStatus] = useState(false)

    return (
		<NavbarItem hasDropdown isHoverable={false} isActive={showStatus}>
			<div className="arrow">
        	    <NavbarLink path={path} description={description} icon_name={icon_name} />
        	    <Icon className="fa fa-arrow-down" isSize="medium" onClick={() => updateShowStatus(!showStatus)}/>
        	</div>
			<NavbarDropdown isHidden={!showStatus}>
				{ children }
			</NavbarDropdown>
		</NavbarItem>
    )
}

export default LinkDropdownGroup;