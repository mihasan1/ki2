import React from "react";

import "./all.sass";

import { Hero, HeroHeader, HeroBody } from "bloomer";
import { Header as AppHeader, Footer as AppFooter } from "../components";

import Head from "./Head";

import { Location } from "./../types/index";

interface LayoutProps {
	children?: React.ReactNode;
	location: Location;
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => (
	<div>
		<Head path={location.pathname} />
		<Hero isFullHeight isColor="light">
			<HeroHeader>
				<AppHeader />
			</HeroHeader>

			<HeroBody
				id={location.pathname === "/" ? "sky" : ""}
				className="main-content"
			>
				{children}
			</HeroBody>
		</Hero>
		<AppFooter />
	</div>
);

export default Layout;
