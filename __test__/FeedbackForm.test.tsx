import React from "react";
import { render } from "@testing-library/react";

import { FeedbackForm } from "./../src/components";

test("renders correctly", () => {
	const { baseElement } = render(<FeedbackForm />);

	expect(baseElement).toMatchSnapshot();
});
