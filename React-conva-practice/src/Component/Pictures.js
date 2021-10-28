import React, { useEffect, useState } from "react";
import { Stage, Layer, Image } from "react-konva";

export default function Picture() {
	const [image, setImage] = useState(new window.Image());

	useEffect(() => {
		const img = new window.Image();
		img.src =
			"https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80";
		setImage(img);
	}, []);

	return (
		<Stage width={window.innerWidth} height={window.innerHeight}>
			<Layer>
				<Image x={100} y={200} image={image} />
			</Layer>
		</Stage>
	);
}
