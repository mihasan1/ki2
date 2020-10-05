import React from "react";
import { Container, Content, Box } from "bloomer";

export interface RawMarkdownProps {
	html: string;
}

const RawMarkdown: React.FC<RawMarkdownProps> = ({ html }) => {
	return (
		<Container>
			<Box className="box-raw-markdown-remark">
				<Content>
					<div
						dangerouslySetInnerHTML={{ __html: html }}
						className="raw-markdown-remark"
					/>
				</Content>
			</Box>
		</Container>
	);
};

export default RawMarkdown;
