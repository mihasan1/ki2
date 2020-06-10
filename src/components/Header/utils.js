import React from "react";

import NavbarLink from "./../NavbarLink";
import LinkDropdownGroup from "./../LinkDropdownGroup";

export const process = array => {
	return array.map(item => {
		const newItem = { ...item };

		const { child } = newItem;
		const parentPath = newItem.path;

		if (Array.isArray(child)) {
			newItem.child = child.map(({ path, ...other }) => {
				const newPath = parentPath.concat(
					`/${path}`
				);

				return { 
					path: newPath, 
					...other 
				};
			});

			return {
				...newItem,
				child: process(newItem.child),
			};
		} else {
			return {
				...newItem,
				path: `/${parentPath}`
			};
		}
	});
};

export const generateNavigator = array => {
	return array.map(({ path, description, icon_name, child }) => {
		if (Array.isArray(child)) {
			return (
				<LinkDropdownGroup
					path={path}
					description={description}
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
					description={description}
					icon_name={icon_name}
					key={path}
				/>
			);
		}
	});
};

export const menuConfigToFlat = array => {
	return array.flatMap(item => {
		if (Array.isArray(item.child)) {
      return menuConfigToFlat(item.child)
    } else {
			return { ...item	}
		}
	});
}

export const createMenu = config => generateNavigator(process(config));

export const findTitleByPath = array => searchPath => {
	return menuConfigToFlat(array)
		.find(({ path }) => path === searchPath);
}