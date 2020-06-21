import {
	menuConfigToFlat,
	createMenu,
	findMetaByPath,
	process,
	generateNavigator,
} from "./../utils";

import { menu1, menu2, menu3, menu4 } from "./mock";

import { PageConfig } from "./../../../types";

describe("test proccess function", () => {
	it("test with depth = 1", () => {
		const processedMenu = process(menu1);

		expect(processedMenu[0].path).toEqual("/main");
		expect(processedMenu[1].path).toEqual("/history");
	});

	it("test proccess depth = 2", () => {
		const processedMenu = process(menu2);

		expect(processedMenu[0].path).toEqual("/main");
		expect(processedMenu[1].path).toEqual("/history");

		expect(processedMenu[2].child![0].path).toEqual("/abiturient/memo");
		expect(processedMenu[2].child![1].path).toEqual("/abiturient/invite_rules");
		expect(processedMenu[2].child![2].path).toEqual("/abiturient/exams");
	});

	it("test proccess depth = 3", () => {
		const processedMenu = process(menu3);

		expect(processedMenu[0].path).toEqual("/main");
		expect(processedMenu[0].child![0].path).toEqual("/main/history");
		expect(processedMenu[0].child![0].child![0].path).toEqual(
			"/main/history/modernity",
		);
	});

	it("test proccess depth = 4", () => {
		const processedMenu = process(menu4);

		expect(processedMenu[0].path).toEqual("/main");
		expect(processedMenu[0].child![0].path).toEqual("/main/history");
		expect(processedMenu[0].child![0].child![0].path).toEqual(
			"/main/history/modernity",
		);
		expect(processedMenu[0].child![0].child![0].child![0].path).toEqual(
			"/main/history/modernity/2020",
		);
	});
});
