import React, { useState } from "react";
import Link from "gatsby-link";
import {
	Navbar,
	NavbarMenu,
	NavbarBurger,
	NavbarBrand,
	NavbarDropdown,
	NavbarEnd,
	NavbarItem,
} from "bloomer";

import NavbarLink from "./../NavbarLink";
import LinkDropdownGroup from "./../LinkDropdownGroup";

import links from "./../../data/links.json";

// TODO: rename `g` and `f` functions!

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

const f = array => {
	return array.map(({ path, description, icon_name, child }) => {
		if(Array.isArray(child)) {
			return (
				<LinkDropdownGroup 
					path={path} 
					description={description} 
					icon_name={icon_name} 
					key={path}
				>{f(child)}</LinkDropdownGroup>
			)
		} else {
			return (
				<NavbarLink
					path={path}
					description={description}
					icon_name={icon_name}
					key={path}
				/>
			)
		}
	})
}

const Menu = () => {
	const [isActive, toggleMenu] = useState(false);

	const onClickNav = () => toggleMenu(!isActive);

	const navLinkList = f(g(links));

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
