import React, { useState } from "react";

import {
	Group,
	Rect,
	Stage,
	Line,
	Layer,
	Polygon,
	Ellipse,
	Transformer,
	Circle,
} from "react-konva";
function Drawing() {
	const [lines, setLines] = useState([]);
	const [draw, setDraw] = useState(false);
	const handleClickOnStage = (e) => {
		let pos = e.target.getStage().getPointerPosition();
		setLines([...lines, [pos.x, pos.y, pos.x, pos.y]]);
		setDraw(true);
	};

	const handleMouseMoveOnStage = (e) => {
		let pos = e.target.getStage().getPointerPosition();
		if (draw) {
			let temp = [...lines];
			temp[temp.length - 1][2] = pos.x;
			temp[temp.length - 1][3] = pos.y;
			setLines(temp);
		}
	};
	return (
		<>
			<div id="container"></div>
			<Stage
				width={window.innerWidth - 50}
				height={window.innerHeight - 50}
				container="container"
				onClick={handleClickOnStage}
				onMouseMove={handleMouseMoveOnStage}
			>
				<Layer>
					<Group>
						{lines.map((line, i) => {
							return (
								<>
									<Line
										id={i}
										points={[line[0], line[1], line[2], line[3]]}
										stroke="black"
										lineCap="round"
										name="line"
										lineJoin="round"
										strokeWidth={2}
										z-index={0}
									/>
									<Circle
										x={line[0]}
										y={line[1]}
										width={10}
										height={10}
										fill="black"
										radius={10}
										strokeWidth={20}
										shadowBlur={5}
										onClick={draw}
									/>
									<Circle
										x={line[0]}
										y={line[1]}
										width={10}
										height={10}
										fill="white"
										radius={8}
										strokeWidth={20}
										shadowBlur={5}
										onClick={draw}
									/>
									<Circle
										x={line[0]}
										y={line[1]}
										width={10}
										height={10}
										fill="black"
										radius={6}
										strokeWidth={20}
										shadowBlur={5}
										onClick={draw}
									/>
									<Circle
										x={line[0]}
										y={line[1]}
										width={10}
										height={10}
										fill="white"
										radius={4}
										strokeWidth={20}
										shadowBlur={5}
										onClick={draw}
									/>
									<Circle
										x={line[0]}
										y={line[1]}
										width={10}
										height={10}
										fill="red"
										radius={2}
										strokeWidth={20}
										shadowBlur={5}
										onClick={draw}
									/>
								</>
							);
						})}
						{/* {nodes.map((node, i) => {
							console.log(node);
							return (
								<Circle
									id={i}
									x={node[0]}
									y={node[1]}
									radius={6}
									fill="grey"
									name="circle"
									onClick={setDraw(false)}
								/>
							);
						})} */}
					</Group>
				</Layer>
			</Stage>
		</>
	);
}

export default Drawing;
