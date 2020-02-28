import React from "react";
import Link from "gatsby-link";
import { Container, Tabs, TabList, Tab, TabLink } from "bloomer";

const Menu = () => (
	<Container>
		<Tabs isAlign="centered">
			<TabList>
				<Tab>
					<Link to="/main/">Go to page 2</Link>
				</Tab>
				<Tab>
					<Link to="/">Home</Link>
				</Tab>
				<Tab>
					<Link to="/page-2/">Go to page 2</Link>
				</Tab>
			</TabList>
		</Tabs>
	</Container>
);

export default Menu;
