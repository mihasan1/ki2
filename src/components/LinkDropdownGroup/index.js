import React, { useState } from "react";
import { NavbarDropdown, NavbarItem, Icon } from "bloomer";

import NavbarLink from "./../index";

import "./arrow.sass";

const Item = ({ title, icon_name }) => (
	<NavbarItem>
		{icon_name !== null && <Icon isSize="large" className={icon_name} />}
		{title}
	</NavbarItem>
);

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
				<Icon
	            	className="fa fa-arrow-down mark"
	            	isSize="medium"
	            />
			
			</div>
			<NavbarDropdown isHidden={!showStatus}>
				{ children }
			</NavbarDropdown>
		</NavbarItem>
	)
}

export default LinkDropdownGroup;
