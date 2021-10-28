import React from "react";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";

const URLImage = ({ image }) => {
	const [img] = useImage(image.src);
	return (
		<Image
			image={img}
			x={image.x}
			y={image.y}
			offsetX={img ? img.width / 2 : 0}
			offsetY={img ? img.height / 2 : 0}
		/>
	);
};

const DragDrop = () => {
	const dragUrl = React.useRef();
	const stageRef = React.useRef();
	const [images, setImages] = React.useState([]);
	return (
		<div>
			Try to drag image into the stage
			<br />
			<img
				alt="lion"
				src="https://tse3.mm.bing.net/th?id=OIP.r0v7bW8y0t3vcAzdOsJEAwHaEo&pid=Api&P=0&w=293&h=184"
				draggable={true}
				onDragStart={(e) => {
					dragUrl.current = e.target.src;
				}}
			/>
			<div
				onDrop={(e) => {
					e.preventDefault();
					stageRef.current.setPointersPositions(e);
					setImages(
						images.concat([
							{
								...stageRef.current.getPointerPosition(),
								src: dragUrl.current,
							},
						])
					);
				}}
				onDragOver={(e) => e.preventDefault()}
			>
				<Stage
					width={window.innerWidth}
					height={window.innerHeight}
					style={{ border: "1px solid grey", marginTop: "10px"}}
					ref={stageRef}
				>
					<Layer>
						{images.map((image) => {
							return <URLImage image={image} />;
						})}
					</Layer>
				</Stage>
			</div>
		</div>
	);
};

export default DragDrop;
