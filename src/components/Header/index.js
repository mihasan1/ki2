import React from "react";
import Link from "gatsby-link";
import {
	Container,
	Tabs,
	TabList,
	Tab,
	TabLink,
	NavbarMenu,
	NavbarStart,
	NavbarEnd,
	NavbarItem,
	NavbarLink,
	NavbarDivider,
	Icon,
} from "bloomer";

import LinkTab from "./../LinkTab";

import { links } from "./links";

const Menu = () => (
	<NavbarMenu hasTextAlign="centered">
		<NavbarStart>
			{links.map(({ path, description }) => (
				<LinkTab path={path} description={description} />
			))}
		</NavbarStart>
	</NavbarMenu>
);

export default Menu;
