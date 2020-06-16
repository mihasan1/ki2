import React from "react";

import { Message, MessageHeader, MessageBody, Content, Icon } from "bloomer";

import Layout from "./../layouts/Layout";

const NotFoundPage = ({ location }) => (
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
					<a href="/main">Повернутися на головну</a>
				</Content>
			</MessageBody>
		</Message>
	</Layout>
);

export default NotFoundPage;
