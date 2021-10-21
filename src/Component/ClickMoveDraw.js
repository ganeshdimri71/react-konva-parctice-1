import React, { useState } from 'react'
import { Stage, Layer, Line, Text } from "react-konva";

function DrawLine() {
  const [ lines, setLines ] = useState( [] )
  const [draw, setDraw] = useState(false)
  const handleMouseClick = ( e ) => {
    const pos = e.target.getStage().getPointerPosition();
    setDraw( !draw );
    setLines( [ ...lines, { x1: pos.x, y1: pos.y, x2: pos.x, y2: pos.y } ] );
    console.log('The value of lines is : ', lines)
  }
		/* const handleMouseMove = (e) => {
			const pos = e.target.getStage().getPointerPosition();
      let lastLine = lines.length;
      if ( draw ){
        console.log(lastLine, pos.x, pos.y)
        setLines([...lines, lines[ lastLine ].x2 = pos.x, lines[ lastLine ].y2 = pos.y] );}
      
		}; */

  return (
		<div>
			<Stage
				width={window.innerWidth}
				height={window.innerHeight}
				/* onMouseMove={handleMouseMove} */
				onClick={handleMouseClick}
			>
				<Layer>
					<Text text="Just start drawing" x={5} y={30} />
					{lines.map((line, i) => (
						<Line
							key={i}
							points={[line.x1, line.y1, line.x2, line.y2]}
							stroke="#df4b26"
							strokeWidth={5}
							tension={0.5}
							lineCap="round"
						/>
					))}
				</Layer>
			</Stage>
		</div>
	);
}

export default DrawLine;
