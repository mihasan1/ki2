import React, { useContext } from "react";
import { Footer, Container, Content, Columns, Column, Icon } from "bloomer";

import useDarkMode from "use-dark-mode";

import { FeedbackForm } from "./../index";

import "./index.css";

const AppFooter: React.FC = () => {
	const { toggle } = useDarkMode();

	return (
		<Footer id="footer">
			<Container>
				<Content>
					<Columns>
						<Column isSize="1/2">
							<p>
								Made with
								<Icon
									hasTextColor="danger"
									className="fa fa-heart"
									onClick={toggle}
								/>
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
};

export default AppFooter;
