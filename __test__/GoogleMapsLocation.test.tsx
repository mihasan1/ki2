import React from "react";
import renderer from "react-test-renderer";

import GoogleMapsLocation from "./../src/components/GoogleMapsLocation";

test("renders correctly", () => {
	const tree = renderer.create(<GoogleMapsLocation />).toJSON();

	expect(tree).toMatchSnapshot();
});
