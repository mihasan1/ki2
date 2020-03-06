import React, { useState } from "react";
import Link from "gatsby-link";
import {
	Container,
	Tabs,
	TabList,
	Tab,
	TabLink,
	Navbar,
	NavbarMenu,
	NavbarBurger,
	NavbarBrand,
	NavbarStart,
	NavbarEnd,
	NavbarItem,
} from "bloomer";

import NavbarLink from "./../NavbarLink";

import links from "./../../data/links.json";

/*
<NavbarItem hasDropdown isHoverable>
    <NavbarLink href='#/documentation'>Documentation</NavbarLink>
    <NavbarDropdown>
        <NavbarItem href='#/'>One A</NavbarItem>
        <NavbarItem href='#/'>Two B</NavbarItem>
        <NavbarDivider />
        <NavbarItem href='#/'>Two A</NavbarItem>
    </NavbarDropdown>
</NavbarItem>
*/

const g = array => {
	return array.map(item => {
		const newItem = { ...item };
		
		const { child } = newItem;
		const parentPath = newItem.path;

		if(Array.isArray(child)) {
			newItem.child = child.map(({ path, ...other }) => {
				const newPath = parentPath.concat(path);

				return { path: newPath, ...other };
			});

			return {
				...newItem,
				child: g(newItem.child),
			};
		} else {
			return newItem;
		}
	});
}

console.log(g(links));

const Menu = () => {
	const [isActive, toggleMenu] = useState(false);

	const onClickNav = () => toggleMenu(!isActive);

	const navLinkList = links.map(({ path, description, icon_name }) => (
		<NavbarLink
			path={path}
			description={description}
			icon_name={icon_name}
			key={path}
		/>
	));

	return (
		<Navbar>
			<NavbarBrand>
				<NavbarItem className="brand">
					<span id="airplane" role="img" aria-label="airplane">
						&#x2708;
					</span>
					<Link to="/">Київський авіаційний технікум</Link>
				</NavbarItem>
				<NavbarBurger isActive={isActive} onClick={onClickNav} />
			</NavbarBrand>
			<NavbarMenu
				hasTextAlign="centered"
				isActive={isActive}
				onClick={onClickNav}
			>
				<NavbarEnd>{navLinkList}</NavbarEnd>
			</NavbarMenu>
		</Navbar>
	);
};

export default Menu;
