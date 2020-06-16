import React from "react";
import PropTypes from "prop-types";

import "font-awesome/css/font-awesome.css";
import "./all.sass";

import { Hero, HeroHeader, HeroBody } from "bloomer";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";

import Head from "./Head";

const Layout = ({ children, location }) => (
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

Layout.propTypes = {
	children: PropTypes.func,
};

export default Layout;
