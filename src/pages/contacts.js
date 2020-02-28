import React from "react";
import Link from "gatsby-link";
import { Container, Title, Content, Heading } from "bloomer";

const space = " ";

const Contacts = () => (
	<Container hasTextAlign="centered">
		<Content>
			<Title>Київський авіаційний технікум</Title>
			<hr />
			<Heading>м. Київ 03062 пр. Перемоги, 100/1</Heading>

			<p>
				тел.:{space}
				<a href="tel:+360444430203">(044) 443-02-03</a>,{space}
				<a href="tel:+360444002881">(044) 400-28-81</a> - приймальна директора
				<br />
				<a href="tel:+3600444545762">(044) 454-57-62</a> - навчальна частина
			</p>

			<p>
				моб.:{space}
				<a href="tel:+360686865815">(068) 686-58-15</a>,{space}
				<a href="tel:+360937103158">(093) 710-31-58</a> - приймальна комісія
			</p>

			{/*
				<p>
					Адміністрація сайту:
					<br />
					<a href="mailto:adm_kiat@mail.ru">adm_kiat@mail.ru</a>
				</p>
			*/}

			<p>
				Графік роботи:
				<br />
				Пн.-Пт. 8:00-16:30 без перерви.
			</p>
			
		</Content>
	</Container>
);

export default Contacts;
