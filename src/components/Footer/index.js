import React from "react";
import { Footer, Container, Content, Columns, Column, Icon } from "bloomer";

import { FeedbackForm } from "./../index";

const AppFooter = () => (
	<Footer id="footer">
		<Container>
			<Content>
				<Columns>
					<Column isSize="1/2">
						<p>
							Made with
							<Icon hasTextColor="danger" className="fa fa-heart" />
							by <a href="https://github.com/faramozzayw">faramozzayw</a>
						</p>
					</Column>
					<Column isSize="1/2" hasTextAlign="right">
						<FeedbackForm />
					</Column>
				</Columns>
			</Content>
		</Container>
	</Footer>
);

export default AppFooter;
