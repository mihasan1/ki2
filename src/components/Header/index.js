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

import { f } from "./utils"

const Menu = () => {
	const [isActive, toggleMenu] = useState(false);

	const onClickNav = () => toggleMenu(!isActive);

	const navLinkList = f(links);

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
			<NavbarMenu hasTextAlign="left" isActive={isActive}>
				<NavbarEnd>{navLinkList}</NavbarEnd>
			</NavbarMenu>
		</Navbar>
	);
};

export default Menu;
