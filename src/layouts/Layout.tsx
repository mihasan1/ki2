import React, { useState, useEffect } from "react";
import useDarkMode from "use-dark-mode";
import { Hero, HeroBody } from "bloomer";

import "./all.sass";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.css";

import { Header as AppHeader, Footer as AppFooter } from "../components";

import SEO from "./SEO";

import { Location } from "./../types/index";

interface LayoutProps {
	location: Location;
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
	const [isClient, setIsClient] = useState(false);
	const darkMode = useDarkMode();

	useEffect(() => setIsClient(true), []);

	return (
		<>
			<SEO pathname={location.pathname} />
			{isClient && (
				<>
					<AppHeader darkModeValue={darkMode.value} />
					<Hero
						isFullHeight
						isColor={darkMode.value ? "dark" : "light"}
						className="layout"
					>
						<HeroBody
							id={location.pathname === "/" ? "sky" : ""}
							className="main-content"
						>
							{children}
						</HeroBody>
					</Hero>
					<AppFooter />
				</>
			)}
		</>
	);
};

export default Layout;
