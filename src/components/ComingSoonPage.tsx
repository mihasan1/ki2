import React from "react";

import { Message, MessageHeader, MessageBody, Content, Icon } from "bloomer";

import Layout from "./../layouts/Layout";

import { PageWithLocation } from "./../types";

const ComingSoonPage: React.FC<PageWithLocation> = ({ location }) => (
	<Layout location={location}>
		<Message isColor="warning">
			<MessageHeader>
				<p>Увага! ВАЖЛИВЕ ПОВІДОМЛЕННЯ!</p>
			</MessageHeader>
			<MessageBody>
				<Content>
					<h3>Ця сторінка на даний момент незаповнена</h3>
					<br />
					<h4>
						Але це не на довго, адже ми вже працюємо над цим{" "}
						<Icon hasTextColor="danger" className="fa fa-heart" />
					</h4>
					<br />
					<a href="/main">Повернутися на головну</a>
				</Content>
			</MessageBody>
		</Message>
	</Layout>
);

export default ComingSoonPage;
