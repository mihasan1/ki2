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
						<Column isSize="1/2" className="contact">
							<p>
								© Київський авіаційний технікум <br />
								м. Київ 03062 пр. Перемоги, 100/1 <br />
								Створено з
								<Icon hasTextColor="danger" className="fa fa-heart" />
							</p>
						</Column>
						<Column
							isSize="1/2"
							className="controls_wrapper"
							hasTextAlign="right"
						>
							<div className="controls">
								<FeedbackForm />
								<ThemeSwitch />
							</div>
						</Column>
					</Columns>
				</Content>
			</Container>
		</Footer>
	);
};

export default AppFooter;
