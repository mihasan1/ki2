import React, { useContext, useState } from "react";

import "./all.sass";
import "./index.css";

import { Hero, HeroHeader, HeroBody } from "bloomer";
import { Header as AppHeader, Footer as AppFooter } from "../components";

import SEO from "./SEO";

import { Location } from "./../types/index";
import { toggleIsLoading } from "../components/FeedbackForm/store/action";

import useDarkMode from "use-dark-mode";

interface LayoutProps {
	children?: React.ReactNode;
	location: Location;
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
	const darkMode = useDarkMode(false);

	return (
		<>
			<SEO pathname={location.pathname} />
			<Hero isFullHeight isColor={darkMode.value ? "dark" : "light"}>
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
		</>
	);
};

export default Layout;
