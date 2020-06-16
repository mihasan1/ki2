import React from "react";
import { Container, Title, Content, Box } from "bloomer";

const RawMarkdown = ({ html }) => {
	return (
			<Container>
				<Box>
					<Content>
                        <div 
                            dangerouslySetInnerHTML={{ __html: html }}
                            className="raw-markdown-remark"
                        />
					</Content>
				</Box>
			</Container>
	);
}

export default RawMarkdown;
