import React from "react";
import { render, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";

import { NewsPreview } from "./../src/components";

const props = {
	title: "Нові новини",
	date: "2020-05-14",
	path: "/bad_guy",
	html: `
        <h1>Ми всі помремо</h1>
        <small>Дякуємо за увагу! Хорошого вечора!</small>
    `,
};

describe("Test NewsPreview component", () => {
	test("render correctly", () => {
		const tree = renderer.create(<NewsPreview {...props} />).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
