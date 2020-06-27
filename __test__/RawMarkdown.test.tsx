import React from "react";
import renderer from "react-test-renderer";

import { RawMarkdown } from "./../src/components";

test("renders correctly", () => {
	const testHTML = "<p>test html</p>";

	const tree = renderer.create(<RawMarkdown html={testHTML} />).toJSON();

	expect(tree).toMatchSnapshot();
});
