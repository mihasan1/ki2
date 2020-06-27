import { menuConfigToFlat } from "./../../src/utils";

import { menu1, menu2, menu3, menu4 } from "./../mock";

describe(`test 'menuConfigToFlat' function`, () => {
	it("test with depth = 1", () => {
		const result = menuConfigToFlat(menu1);

		expect(result[0].path).toEqual("/main");
		expect(result[1].path).toEqual("/history");
	});

	it("test with depth = 2", () => {
		const result = menuConfigToFlat(menu2);

		expect(result[0].path).toEqual("/main");
		expect(result[1].path).toEqual("/history");
		expect(result[2].path).toEqual("/abiturient/memo");
		expect(result[3].path).toEqual("/abiturient/invite_rules");
		expect(result[4].path).toEqual("/abiturient/exams");
	});

	it("test with depth = 3", () => {
		const result = menuConfigToFlat(menu3);

		expect(result[0].path).toEqual("/main/history/modernity");
		expect(result[1].path).toEqual("/main/history/20");
	});

	it("test with depth = 4", () => {
		const result = menuConfigToFlat(menu4);

		expect(result[0].path).toEqual("/main/history/modernity/2020");
	});
});
