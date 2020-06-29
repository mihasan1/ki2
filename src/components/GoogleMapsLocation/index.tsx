import React from "react";
import "./index.css";

const GoogleMapsLocation = () => (
	<div className="GoogleMapsLocation">
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317.5086490084039!2d30.394147178574627!3d50.45843621314652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc5fa4d311b3%3A0x8fc5cc5e3d07eab7!2z0JDQndCi0Jog0IbQvC7Qvi7Qui7QsNC90YLQvtC90L7QstCwINCU0L8sINCk0ZbQu9GW0Y8!5e0!3m2!1sru!2sua!4v1582910405937!5m2!1sru!2sua"
			frameBorder="0"
			style={{ border: 0 }}
			allowFullScreen
			title="Розташування Київського авіаційного технікуму"
		/>
	</div>
);

export default GoogleMapsLocation;
