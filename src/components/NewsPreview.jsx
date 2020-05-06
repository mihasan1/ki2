import React from "react";

import { Link } from "gatsby"

import { 
	Card,
	CardHeader,
	CardHeaderTitle,
	CardContent,
	CardImage,
	Image,
	Content,
	CardFooter,
	CardFooterItem,
	Button,
} from "bloomer";

const toPreviewText = (str, begin = 0, end = 150, suspensionPoints = "...") => str.slice(begin, end).concat(suspensionPoints)

const NewsPreview = ({ title, date, path, html, image }) => {
	return (
		<div className="NewsPreview">
			<Card>
				<CardHeader>
					<CardHeaderTitle>
						{ !!title ? title : "Новина без назви - просто новина" }
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
							dangerouslySetInnerHTML={{ __html: toPreviewText(html) }}
						/>
						<br/>
					</Content>
				</CardContent>
				
				<CardFooter>
					<CardFooterItem hasTextAlign="left">
						<small>Дата публікації: {date}</small>
					</CardFooterItem>
					<CardFooterItem>
						<Button isColor="light">
							<Link to={path}>Читати більше...</Link>
						</Button>
					</CardFooterItem>
				</CardFooter>
			</Card>
		</div>
	);
}

export default NewsPreview;