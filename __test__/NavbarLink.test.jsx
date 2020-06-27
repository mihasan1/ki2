import React from "react";
import { render } from "@testing-library/react";

import { NavbarLink } from "./../src/components";

describe("test custom NavbarLink component", () => {
	test("render correctly", () => {
		const props = {
			path: "/main",
			title: "Головна",
			icon_name: null,
		};

		const NavbarLink1 = () => <NavbarLink {...props}></NavbarLink>;
		const { getByText } = render(<NavbarLink1 />);

		expect(getByText(props.title)).toBeInTheDocument();
	});

	test("render correctly without icon", () => {
		const props = {
			path: "/main",
			title: "Головна",
			icon_name: null,
		};

		const { getByText, container } = render(<NavbarLink {...props} />);

		expect(getByText(props.title)).toBeInTheDocument();
		expect(
			[...container.firstChild.classList].includes("without-icon"),
		).toBeTruthy();
	});

	test("render correctly with icon", () => {
		const props = {
			path: "/main",
			title: "Головна",
			icon_name: "fa fa-book fa-2x",
		};

		const { getByText, container } = render(<NavbarLink {...props} />);

		const innerLink = container.firstChild.firstChild;

		expect(getByText(props.title)).toBeInTheDocument();
		expect(innerLink.getAttribute("href")).toEqual(props.path);
		expect(
			[...container.firstChild.classList].includes("without-icon"),
		).toBeFalsy();
	});
});
