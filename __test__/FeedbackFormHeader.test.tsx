import React from "react";
import { render } from "@testing-library/react";

import { FeedbackFormHeader } from "./../src/components";

test("renders correctly", () => {
	const { baseElement } = render(<FeedbackFormHeader />);

	expect(baseElement).toMatchSnapshot();
});

test("renders correctly dark version", () => {
	const { baseElement } = render(<FeedbackFormHeader darkmode />);

	expect(baseElement).toMatchSnapshot();
});
