import React from "react";

import NavbarLink from "./../NavbarLink";
import LinkDropdownGroup from "./../LinkDropdownGroup";

export const process = (array: any[]): any => {
	return array.map(item => {
		const newItem = { ...item };

		const { child } = newItem;
		const parentPath = newItem.path;

		if (Array.isArray(child)) {
			newItem.child = child.map(({ path, ...other }) => {
				const newPath = parentPath.concat(`/${path}`);

				return {
					path: newPath,
					...other,
				};
			});

			return {
				...newItem,
				child: process(newItem.child),
				path: `/${newItem.path}`,
			};
		} else {
			return {
				...newItem,
				path: `/${parentPath}`,
			};
		}
	});
};

export const generateNavigator = (array: any[]): any => {
	return array.map(({ path, title, icon_name, child }) => {
		if (Array.isArray(child)) {
			return (
				<LinkDropdownGroup
					path={path}
					title={title}
					icon_name={icon_name}
					key={path}
				>
					{generateNavigator(child)}
				</LinkDropdownGroup>
			);
		} else {
			return (
				<NavbarLink
					path={path}
					title={title}
					icon_name={icon_name}
					key={path}
				/>
			);
		}
	});
};

export const menuConfigToFlat = (array: any[]): any => {
	// @ts-ignore
	return array.flatMap(item => {
		if (Array.isArray(item.child)) {
			return menuConfigToFlat(item.child);
		} else {
			return { ...item };
		}
	});
};

export const createMenu = (config: any) => generateNavigator(process(config));

export const findMetaByPath = (array: any[]): any => (searchPath: string) => {
	// @ts-ignore
	return menuConfigToFlat(array).find(({ path }) => path === searchPath);
};
