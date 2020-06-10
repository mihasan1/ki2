import React, { useState } from "react";
import { NavbarDropdown, NavbarItem, Icon } from "bloomer";

import NavbarLink from "./NavbarLink";

const Item = ({ title, icon_name }) => (
	<NavbarItem>
		{icon_name !== null && <Icon isSize="large" className={icon_name} />}
		{title}
	</NavbarItem>
);

const OpenDropdownButton = ({ toggle, status }) => (
	<Icon 
		className="fa fa-arrow-down"
		isSize="medium"
		onClick={() => toggle(!status)}
	/>
)

const LinkDropdownGroup = ({ path, title, icon_name, children }) => {
	const [showStatus, updateShowStatus] = useState(false);

	const toggleDropdown = () => updateShowStatus(!showStatus)

	return (
		<NavbarItem
			hasDropdown
			isHoverable={false}
			isActive={showStatus}
			tabIndex={0}
			onKeyDown={toggleDropdown}
		>
			<div className="arrow" onClick={toggleDropdown}>

				<Item title={title} icon_name={icon_name} />
				<OpenDropdownButton toggle={() =>{}} status={showStatus} />
			
			</div>
			<NavbarDropdown isHidden={!showStatus}>
				{ children }
			</NavbarDropdown>
		</NavbarItem>
	)
}

export default LinkDropdownGroup;
