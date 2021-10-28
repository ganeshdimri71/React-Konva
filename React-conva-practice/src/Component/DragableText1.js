import React, { Component, useState } from "react";
import { render } from "react-dom";
import { Stage, Layer, Text } from "react-konva";

function DragText() {
	const [drag, setIsDrag] = useState(0);
	const [posX, setPosX] = useState(50);
	const [posY, setPosY] = useState(50);

	return (
		<Stage width={window.innerWidth} height={window.innerHeight}>
			<Layer>
				<Text
					text="Draggable Text"
					x={posX}
					y={posY}
					draggable
					fill={drag ? "green" : "black"}
					onDragStart={() => {
						setIsDrag(1);
					}}
					onDragEnd={(e) => {
						setIsDrag(0);
						setPosX(e.target.x());
						setPosY(e.target.y());
					}}
				/>
			</Layer>
		</Stage>
	);
}

export default DragText;
