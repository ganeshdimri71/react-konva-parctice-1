import React from "react";
import { Stage, Layer, Circle, Text } from "react-konva";

const pulseShape = (shape) => {
	shape.to({
		scaleX: 2,
		scaleY: 2,
		onFinish: () => {
			shape.to({
				scaleX: 1,
				scaleY: 1,
			});
		},
	});
};

const RefAPI = (props) => {
	const circleRef = React.useRef(null);

	const handleStageClick = () => {
		const shape = circleRef.current;
		console.log(shape);
		pulseShape(shape);
	};
	const handleCircleClick = (props) => {
		const shape = props.target;

		pulseShape(shape);
		props.cancelBubble = true;
	};

	return (
		<Stage
			width={window.innerWidth}
			height={window.innerHeight}
			onClick={handleStageClick}
			onTap={handleCircleClick}
		>
			<Layer>
				<Text text="Click on any place to see the animation" />
				<Circle
					ref={circleRef}
					x={window.innerWidth / 2}
					y={window.innerHeight / 2}
					radius={80}
					fill="red"
					draggable
					onClick={handleCircleClick}
					onTap={handleCircleClick}
				/>
			</Layer>
		</Stage>
	);
};

export default RefAPI;
