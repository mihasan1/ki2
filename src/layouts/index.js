import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "font-awesome/css/font-awesome.css";
import "./all.sass";

import { Hero, HeroHeader, HeroBody } from "bloomer";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";

const TemplateWrapper = ({ children }) => (
	<div>
		<Helmet title="Київський авіаційний технікум" />
		<Hero isFullHeight isColor="light">
			<HeroHeader>
				<AppHeader />
			</HeroHeader>

			<HeroBody>{children()}</HeroBody>
		</Hero>
		<AppFooter />
	</div>
);

TemplateWrapper.propTypes = {
	children: PropTypes.func,
};

export default TemplateWrapper;
