import React from "react";

/*
    isSize: String = ["small", "massive", "big", "medium"];
    isSpeed: String = ["slow", "slower", "slowest", "super-slow"];
    isDistance: String = ["front", "distant", "background"];
    width: Number(Int);
    height: Number(Int);
*/

const Cloud = ({ isSize = "small", isSpeed = "slow", isDistance = "front", width = "762", height = "331" }) => (
	<svg 
		version="1.1" 
		xmlns="http://www.w3.org/2000/svg" 
		x="0px" 
		y="0px" 
		width={`${width}px`}
		height={`${height}px`}
		viewBox="0 0 762 331" 
		enable-background="new 0 0 762 331" 
		space="preserve" 
		className={`cloud ${isSize} ${isSpeed} ${isDistance}`}
	>
		<path 
			fill="#FFFFFF"
			d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
			c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
			C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
			S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"
		/>
	</svg>
)

export default Cloud;