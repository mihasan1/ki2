import React from "react";

import { Link } from "gatsby";

import {
	Card,
	CardHeader,
	CardHeaderTitle,
	CardContent,
	Content,
	CardFooter,
	CardFooterItem,
	Button,
} from "bloomer";

import { News } from "./../../types";

import "./index.sass";

const toPreviewText = (
	str = "",
	begin = 0,
	end = 150,
	suspensionPoints = "...",
) => str.slice(begin, end).concat(suspensionPoints);

const NewsPreview: React.FC<News> = ({ title, date, path, html }) => {
	return (
		<div className="NewsPreview">
			<Card>
				<CardHeader>
					<CardHeaderTitle>
						{!!title ? title : "Новина без назви - просто новина"}
					</CardHeaderTitle>
				</CardHeader>

				<CardContent>
					<Content>
						<div dangerouslySetInnerHTML={{ __html: toPreviewText(html) }} />
						<br />
					</Content>
				</CardContent>

				<CardFooter>
					<CardFooterItem hasTextAlign="left">
						<small>Дата публікації: {date}</small>
					</CardFooterItem>
					<CardFooterItem>
						<Button isColor="light" isPaddingless isLink>
							<Link
								style={{
									padding: "0.75rem",
								}}
								to={path}
							>
								Читати більше...
							</Link>
						</Button>
					</CardFooterItem>
				</CardFooter>
			</Card>
		</div>
	);
};

export default NewsPreview;
