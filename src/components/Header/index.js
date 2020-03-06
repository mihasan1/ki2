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

import LinkTab from "./../LinkTab";

import links from "./../../data/links.json";

const Menu = () => {
	const [isActive, toggleMenu] = useState(false);

	const onClickNav = () => toggleMenu(!isActive);

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
				<NavbarEnd>
					{links.map(({ path, description, icon_name }) => (
						<LinkTab
							path={path}
							description={description}
							icon_name={icon_name}
							key={path}
						/>
					))}
				</NavbarEnd>
			</NavbarMenu>
		</Navbar>
	);
};

export default Menu;
