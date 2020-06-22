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

import "./index.sass";

import NavbarLink from "./../NavbarLink";
import LinkDropdownGroup from "./../LinkDropdownGroup";

import navbar from "./../../page_data/navbar.json";

import { createMenu } from "./utils";

const Menu = () => {
	const [isActive, toggleMenu] = useState(false);
	const onClickNav = () => toggleMenu(!isActive);

	const navLinkList = createMenu(navbar.menu);

	return (
		<Navbar>
			<NavbarBrand>
				<NavbarItem className="brand">
					<span id="airplane" role="img" aria-label="airplane">
						&#x2708;
					</span>
					<Link to="/">{navbar.title}</Link>
				</NavbarItem>
				<NavbarBurger
					isActive={isActive}
					onClick={onClickNav}
					onKeyDown={onClickNav}
					role="navigation"
					aria-label="Відкрити меню"
					tabIndex={0}
				/>
			</NavbarBrand>
			<NavbarMenu hasTextAlign="left" isActive={isActive}>
				<NavbarEnd>{navLinkList}</NavbarEnd>
			</NavbarMenu>
		</Navbar>
	);
};

export default Menu;
