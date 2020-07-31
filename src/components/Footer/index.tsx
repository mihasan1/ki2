import React from "react";
import { Footer, Container, Content, Columns, Column, Icon } from "bloomer";

import { FeedbackForm } from "./../index";

import "./index.css";
import ThemeSwitch from "../ThemeSwitch";

const AppFooter: React.FC = () => {
	return (
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
				<ThemeSwitch />
			</Container>
		</Footer>
	);
};

export default AppFooter;
