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

import "./index.sass";

import classnames from "classnames";
import useDarkMode from "use-dark-mode";

import navbar from "./../../page_data/navbar.json";

import { createMenu } from "./utils";

const Menu = () => {
	const [isActive, toggleMenu] = useState(false);
	const onClickNav = () => toggleMenu(!isActive);
	const darkmode = useDarkMode();

	const navLinkList = createMenu(navbar.menu);

	return (
		<Navbar
			className={classnames("is-fixed-top", {
				"is-dark": darkmode.value,
				"is-light": !darkmode.value,
			})}
		>
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
				className={classnames({
					"has-background-dark": darkmode.value,
					"has-background-light": !darkmode.value,
				})}
			>
				<NavbarEnd>{navLinkList}</NavbarEnd>
			</NavbarMenu>
		</Navbar>
	);
};

export default Menu;
