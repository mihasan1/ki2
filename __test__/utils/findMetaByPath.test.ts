import { findMetaByPath } from "./../../src/utils";

import { menu1, menu2, menu3 } from "./../mock";

import { PageConfig } from "./../../src/types";

describe(`test 'menuConfigToFlat' function`, () => {
	it("test with depth = 1", () => {
		const { path, child, title }: PageConfig = findMetaByPath(menu1)("/main");

		expect(path).toEqual("/main");
		expect(child).toBeNull();
		expect(title).toEqual("Головна");
	});

	it("test with depth = 2", () => {
		{
			const { path, child, title }: PageConfig = findMetaByPath(menu2)("/main");

			expect(path).toEqual("/main");
			expect(child).toBeNull();
			expect(title).toEqual("Головна");
		}
		{
			const { path, child, title }: PageConfig = findMetaByPath(menu2)("/memo");

			expect(path).toEqual("/abiturient/memo");
			expect(child).toBeNull();
			expect(title).toEqual("Пам'ятка абітурієнту");
		}
	});

	it("test with depth = 3", () => {
		{
			const { path, child, title }: PageConfig = findMetaByPath(menu3)(
				"/history",
			);

			expect(path).toEqual("/main/history/modernity");
			expect(child).toBeNull();
		}

		{
			const { path, child, title }: PageConfig = findMetaByPath(menu3)(
				"/modernity",
			);

			expect(path).toEqual("/main/history/modernity");
			expect(child).toBeNull();
			expect(title).toEqual("Сучаність");
		}
	});
});
