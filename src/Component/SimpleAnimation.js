import React, { Component, useRef } from "react";
import { render } from "react-dom";
import { Stage, Layer, Rect } from "react-konva";

function MyRect() {
	const inputRef = useRef();
	const changeSize = () => {
		inputRef.current.to({
			scaleX: Math.random() + 0.8,
			scaleY: Math.random() + 0.8,
			duration: 0.2,
		});
	};

	return (
		<Rect
			ref={inputRef}
			width={50}
			height={50}
			fill="red"
			draggable
			onDragEnd={changeSize}
			onDragStart={changeSize}
		/>
	);
}

function Animation() {
	return (
		<Stage width={window.innerWidth} height={window.innerHeight}>
			<Layer>
				<MyRect />
			</Layer>
		</Stage>
	);
}

export default Animation;
