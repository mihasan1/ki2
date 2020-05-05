import React from "react";

import { Link } from "gatsby-link";

import { 
	Card,
	CardHeader,
	CardHeaderTitle,
	CardContent,
	CardImage,
	Image,
	Media,
	Content,
} from "bloomer";

const NewsPreview = ({ title, date, path, html, image }) => {
	return (
		<div className="NewsPreview">
			<Card>
				<CardHeader>
					<CardHeaderTitle>
						{title}
					</CardHeaderTitle>
				</CardHeader>
				{
					!!image && (
						<CardImage>
							<Image isRatio='4:3' src={image} />
						</CardImage>
					)
				}
				<CardContent>
					<Content>
						<div
							dangerouslySetInnerHTML={{ __html: html }}
						/>
						<br/>
						<small>Дата публікації: {date}</small>
					</Content>
				</CardContent>
			</Card>
		</div>
	);
}

export default NewsPreview;