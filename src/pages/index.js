import React from "react";
import { Container, Content, Title, Subtitle } from "bloomer";

import specialtyList from "./../data/specialtyList.json";

const SpecialtyField = ({ title, description }) => (
	<div>
		<Subtitle isSize={6} className="has-text-left">
			{title}
		</Subtitle>
		<p className="has-text-left">{description}</p>
		<br />
	</div>
);

const IndexPage = () => {
	const list = specialtyList.map(({ title, description }) => (
		<li>
			<SpecialtyField title={title} description={description} key={title} />
		</li>
	));

	return (
		<Container hasTextAlign="centered">
			<Content>
				<Title>КИЇВСЬКИЙ АВІАЦІЙНИЙ ТЕХНІКУМ у комплексі:</Title>
				<Subtitle isSize={5}>
					<br />
					Національного аерокосмічного університету їм . Жуковського (ХАІ),
					Сумського національного аграрного університету
					<br />
					<br />
					ЗАПРОШУЄ
				</Subtitle>
				<Subtitle isSize={6}>
					на навчання випускників шкіл та професійно-технічних закладів на
					2020-2021 н.р. на основі базової загальної середньої освіти (9 класів)
					та повної загальної середньої освіти (11 класів), або наявності
					диплому кваліфікованого робітника за спеціальностями:
				</Subtitle>
				<ol>{list}</ol>
			</Content>
		</Container>
	);
};

export default IndexPage;
