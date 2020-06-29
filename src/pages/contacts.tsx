import React from "react";
import { Container, Title, Content, Heading } from "bloomer";

import GoogleMapsLocation from "./../components/GoogleMapsLocation";

import Layout from "./../layouts/Layout";

import { PageWithLocation } from "./../types";

const Contacts: React.FC<PageWithLocation> = ({ location }) => (
	<Layout location={location}>
		<Container hasTextAlign="centered">
			<Content className="raw-markdown-remark">
				<Title>Київський авіаційний технікум</Title>
				<hr />
				<Heading>м. Київ 03062 пр. Перемоги, 100/1</Heading>

				<p>
					тел.: <a href="tel:+380444430203">(044) 443-02-03</a>,{" "}
					<a href="tel:+380444002881">(044) 400-28-81</a> - приймальна директора
					<br />
					<a href="tel:+3800444545762">(044) 454-57-62</a> - навчальна частина
				</p>

				<p>
					моб.: <a href="tel:+380953914188">(095) 391-41-88</a>,{" "}
					<a href="tel:+380686865815">(068) 686-58-15</a>,{" "}
					<a href="tel:+380937103158">(093) 710-31-58</a> - приймальна комісія
				</p>

				<p>
					Графік роботи:
					<br />
					Пн.-Пт. 8:00-18:00 без перерви.
				</p>

				<GoogleMapsLocation />
			</Content>
		</Container>
	</Layout>
);

export default Contacts;
