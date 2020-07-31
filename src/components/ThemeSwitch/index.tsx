import React from "react";
import useDarkMode from "use-dark-mode";

import "./index.css";

const ThemeSwitch = () => {
	const { toggle, value } = useDarkMode();

	return (
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
	);
};

export default ThemeSwitch;
