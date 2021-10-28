import React from "react";
import { Stage, Layer, Shape } from "react-konva";

export default function RegShape() {
	return (
		<Stage width={window.innerWidth} height={window.innerHeight}>
			<Layer>
				<Shape
					sceneFunc={(context, shape) => {
						context.beginPath();
						context.moveTo(0, 50);
						context.bezierCurveTo(100, 200, 100, 400, 200, 0);
						context.closePath();
						context.fillStrokeShape(shape);
					}}
					fill="#00D2FF"
					stroke="black"
					strokeWidth={4}
				/>
			</Layer>
		</Stage>
	);
}
