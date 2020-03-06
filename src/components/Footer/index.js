import React from "react";
import { Footer, Container, Content, Columns, Column, Icon } from "bloomer";

const AppFooter = () => (
	<Footer id="footer">
		<Container>
			<Content>
				<Columns>
					<Column isFull>
						<p>
							Made with<Icon hasTextColor="danger" className="fa fa-heart" />
							by <a href="https://github.com/faramozzayw">faramozzayw</a>
						</p>
					</Column>
				</Columns>
			</Content>
		</Container>
	</Footer>
);

export default AppFooter;
