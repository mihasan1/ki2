import React, { useState } from "react";
import { NavbarDropdown, NavbarItem, Icon } from "bloomer";

import NavbarLink from "./NavbarLink";

const Item = ({ description, icon_name }) => (
	<NavbarItem>
		{icon_name !== null && <Icon isSize="large" className={icon_name} />}
		{description}
	</NavbarItem>
);

const OpenDropdownButton = ({ fn, status }) => (
	<Icon className="fa fa-arrow-down" isSize="medium" onClick={() => fn(!status)}/>
)

const LinkDropdownGroup = ({ path, description, icon_name, children }) => {
	const [showStatus, updateShowStatus] = useState(false)

	return (
		<NavbarItem hasDropdown isHoverable={false} isActive={showStatus}>
			<div className="arrow">
				<Item description={description} icon_name={icon_name} />
				<OpenDropdownButton fn={updateShowStatus} status={showStatus} />
			</div>
			<NavbarDropdown isHidden={!showStatus}>
				{ children }
			</NavbarDropdown>
		</NavbarItem>
	)
}

export default LinkDropdownGroup;