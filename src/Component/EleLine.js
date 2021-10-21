import React from "react";
import { Group, Line, Text } from "react-konva";

const EleLine = ( props ) => {
	/* console.log('The props value is : ',props.points) */
	return (
		<Group>
			<Text
				text="Start Drawing Here"
				fontSize={20}
				fontFamily="Times New Roman"
				strokeWidth={2}
				align="center"
			></Text>
			<Line points={props.points} stroke="black" strokeWidth={1}></Line>
		</Group>
	);
};

export default EleLine;
