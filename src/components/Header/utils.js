import React from "react";

import NavbarLink from "./../NavbarLink";
import LinkDropdownGroup from "./../LinkDropdownGroup";

const proccess = array => {
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
				child: proccess(newItem.child),
			};
		} else {
			return {
				...newItem,
				path: `/${parentPath}`
			};
		}
	});
};

const generateNavigator = array => {
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


export const createMenu = config => generateNavigator(proccess(config))
