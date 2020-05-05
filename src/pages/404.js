import React from "react";

import Layout from "./../layouts/Layout";

const NotFoundPage = ({ location }) => (
	<Layout location={location} >
		<div>
			<h1>Сторінку не знайдено!</h1>
			<p>Ви просто потрапили на маршрут, який не має виходу...</p>
		</div>
	</Layout>

);

export default NotFoundPage;
