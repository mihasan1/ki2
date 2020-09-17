import React from "react";
import { render } from "@testing-library/react";

import { FeedbackFormFooter } from "./../src/components";

test("renders correctly", () => {
	const { baseElement } = render(<FeedbackFormFooter />);

	expect(baseElement).toMatchSnapshot();
});
