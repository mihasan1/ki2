import React, { useState } from "react";
import Link from "gatsby-link";
import { NavbarDropdown, NavbarItem, Icon } from "bloomer";

import { NavbarLink } from "./../index";

import { PageMetadata } from "./../../types";

import "./arrow.sass";

export interface ItemProps {
	title?: string;
	icon_name?: string;
}

const Item: React.FC<ItemProps> = ({ title, icon_name }) => (
	<NavbarItem>
		{icon_name !== null && <Icon isSize="large" className={icon_name} />}
		{title}
	</NavbarItem>
);

const LinkDropdownGroup: React.FC<PageMetadata> = ({
	path,
	title,
	icon_name,
	children,
}) => {
	const [showStatus, updateShowStatus] = useState(false);

	const toggleDropdown = () => updateShowStatus(!showStatus);
	
	let currentURL = false;
	if (typeof window !== 'undefined') {
		currentURL = window?.location?.href?.includes(path); 
	}
	
	return (
		<NavbarItem
			hasDropdown
			isHoverable={false}
			isActive={showStatus}
			tabIndex={0}
			onKeyDown={toggleDropdown}
		>
			<div
				className={`arrow ${currentURL ? "currentURL" : ""}`}
				onClick={toggleDropdown}
			>
				<Item title={title} icon_name={icon_name} />
				<Icon className="fa fa-arrow-down mark" isSize="medium" />
			</div>
			<NavbarDropdown isHidden={!showStatus}>{children}</NavbarDropdown>
		</NavbarItem>
	);
};

export default LinkDropdownGroup;
