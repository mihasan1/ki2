import React, { useState } from "react";
import Link from "gatsby-link";
import {
	Navbar,
	NavbarMenu,
	NavbarBurger,
	NavbarBrand,
	NavbarEnd,
	NavbarItem,
} from "bloomer";
import classnames from "classnames";
import { DarkMode } from "use-dark-mode";

import "./index.sass";

import navbar from "./../../page_data/navbar.json";

import { createMenu } from "./../../utils";

export interface MenuProps {
	darkModeValue: DarkMode["value"];
}

const Menu: React.FC<MenuProps> = ({ darkModeValue }) => {
	const [isActive, toggleMenu] = useState(false);
	const onClickNav = () => toggleMenu(!isActive);

	const navLinkList = createMenu(navbar.menu);

	const isColor = `is-${darkModeValue ? "dark" : "light"}`;
	const hasBackground = `has-background-${darkModeValue ? "dark" : "light"}`;

	return (
		<Navbar className={classnames("is-fixed-top", isColor)}>
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
			<NavbarMenu
				hasTextAlign="left"
				isActive={isActive}
				className={hasBackground}
			>
				<NavbarEnd
					className={classnames("navlink", {
						"has-background-dark has-text-white-ter": darkModeValue,
					})}
				>
					{navLinkList}
				</NavbarEnd>
			</NavbarMenu>
		</Navbar>
	);
};

export default Menu;
