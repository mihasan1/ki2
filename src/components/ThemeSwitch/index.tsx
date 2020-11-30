import React, { useState, useEffect } from "react";
import useDarkMode from "use-dark-mode";

import "./index.css";
import { Icon } from "bloomer";

const ThemeSwitch = () => {
	const [isClient, setIsClient] = useState(false);
	const { toggle, value } = useDarkMode();

	useEffect(() => setIsClient(true), []);

	return isClient ? (
		<div className="theme-switch-wrapper">
			<label className="theme-switch" htmlFor="checkbox">
				<input
					type="checkbox"
					id="checkbox"
					onChange={toggle}
					checked={value}
				/>
				<div className="slider round"></div>
			</label>
			<em>Увімкнути тьомну тему!</em>
		</div>
	) : (
		<Icon isSize="large" className="fas fa-spinner fa-pulse" />
	);
};

export default ThemeSwitch;
