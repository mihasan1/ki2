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
	NavbarLink,
	NavbarDivider,
	Icon,
} from "bloomer";

import LinkTab from "./../LinkTab";

import links from "./../../data/links.json";
import logo from "./../../data/logo.jpg";

const Menu = () => {
	const [isActive, toggleMenu] = useState(false);
	const onClickNav = () => toggleMenu(!isActive);
	return (
		<Navbar>
			<NavbarBrand>
				<NavbarItem>Київський авіаційний технікум</NavbarItem>
				<NavbarBurger isActive={isActive} onClick={onClickNav} />
			</NavbarBrand>
			<NavbarMenu
				hasTextAlign="centered"
				isActive={isActive}
				onClick={onClickNav}
			>
				<NavbarStart>
					{links.map(({ path, description, icon_name }) => (
						<LinkTab
							path={path}
							description={description}
							icon_name={icon_name}
							key={path}
						/>
					))}
				</NavbarStart>
			</NavbarMenu>
		</Navbar>
	);
};

export default Menu;
