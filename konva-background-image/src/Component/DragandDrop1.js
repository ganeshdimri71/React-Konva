import React from "react";
import { render } from "react-dom";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";
import Resizer from "react-image-file-resizer";

const URLImage = ({ image }) => {
	const [img] = useImage(image.src);
	return (
		<Image
			image={img}
			x={image.x}
			y={image.y}
			// I will use offset to set origin to the center of the image
			offsetX={img ? img.width / 4 : 0}
			offsetY={img ? img.height / 4 : 0}
			height={100}
			width={100}
		/>
	);
};

const DragDrop1 = () => {
	const dragUrl = React.useRef();
	const stageRef = React.useRef();
	const [images, setImages] = React.useState([]);
	return (
		<div>
			Try to trag and image into the stage:
			<br />
			<img
				style={{ marginRight: "10px", marginBottom: "10px" }}
				alt="lion"
				width={"250px"}
				height={"150px"}
				src={"image1.jpg"}
				draggable="true"
				onDragStart={(e) => {
					dragUrl.current = e.target.src;
				}}
			/>
			<img
				style={{ marginRight: "10px", marginBottom: "10px" }}
				alt="lion"
				width={"250px"}
				height={"150px"}
				src={"image2.jpg"}
				draggable="true"
				onDragStart={(e) => {
					dragUrl.current = e.target.src;
				}}
			/>
			<img
				style={{ marginRight: "10px", marginBottom: "10px" }}
				alt="lion"
				width={"250px"}
				height={"150px"}
				src={"image3.jpg"}
				draggable="true"
				onDragStart={(e) => {
					dragUrl.current = e.target.src;
				}}
			/>
			<img
				style={{ marginRight: "10px", marginBottom: "10px" }}
				alt="lion"
				width={"250px"}
				height={"150px"}
				src={"image4.jpg"}
				draggable="true"
				onDragStart={(e) => {
					dragUrl.current = e.target.src;
				}}
			/>
			<img
				style={{ marginRight: "10px", marginBottom: "10px" }}
				alt="lion"
				width={"250px"}
				height={"150px"}
				src={"image5.jpg"}
				draggable="true"
				onDragStart={(e) => {
					dragUrl.current = e.target.src;
				}}
			/>
			<img
				style={{ marginRight: "10px", marginBottom: "10px" }}
				alt="lion"
				width={"250px"}
				height={"150px"}
				src={"image6.jpg"}
				draggable="true"
				onDragStart={(e) => {
					dragUrl.current = e.target.src;
				}}
			/>
			<img
				style={{ marginRight: "10px", marginBottom: "10px" }}
				alt="lion"
				width={"250px"}
				height={"150px"}
				src={"image7.jpg"}
				draggable="true"
				onDragStart={(e) => {
					dragUrl.current = e.target.src;
				}}
			/>
			<div
				onDrop={(e) => {
					e.preventDefault();
					// register event position
					stageRef.current.setPointersPositions(e);
					// add image
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
					style={{ border: "1px solid grey" }}
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

export default DragDrop1;
