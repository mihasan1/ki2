import React from "react";

import Link from "gatsby-link";

import { Message, MessageHeader, MessageBody, Content, Icon } from "bloomer";

import Layout from "./../layouts/Layout";

import { PageWithLocation } from "./../types";

const NotFoundPage: React.FC<PageWithLocation> = ({ location }) => (
	<Layout location={location}>
		<Message isColor="warning">
			<MessageHeader>
				<p>Увага! ВАЖЛИВЕ ПОВІДОМЛЕННЯ!</p>
			</MessageHeader>
			<MessageBody>
				<Content>
					<h3>Сторінку не знайдено!</h3>
					<br />
					<h4>Цієї сторінки не існує...</h4>
					<br />
					<Link to="/">Повернутися на головну</Link>
				</Content>
			</MessageBody>
		</Message>
	</Layout>
);

export default NotFoundPage;
