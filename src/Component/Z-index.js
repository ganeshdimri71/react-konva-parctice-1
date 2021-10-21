import Konva from "konva";
import React, { useState } from "react";
import { Stage, Layer, Rect, Circle } from "react-konva";
const generateItems = () => {
	const items = [];
	for (let i = 0; i < 10; i++) {
		items.push({
			x: Math.random() * 100,
			y: Math.random() * 300,
			id: "node-" + i,
			color: Konva.Util.getRandomColor(),
		});
	}
	return items;
};

function Zindex () {
	const [ stars, setStars ] = useState( generateItems() );
	
	const handleDragStart = ( e ) => {
		const id = e.target.name();
		const items = stars.slice();
		const item = items.find((i)=>i.id===id)
		const index = items.indexOf( item )
		console.log('The ID is : ', id);
		console.log("The items is : ", items);
		console.log("The item is : ", item);
		console.log("The index is : ", index);

		items.splice(index,1)
		items.push(item)
		setStars( items )
		console.log("The items is : ", items);
		console.log("The stars is : ", stars);
	}

	const handleDragEnd = (e) => {
		const id = e.target.name();
		const items = stars.slice();
		const item = items.find((i) => i.id === id);
		const index = items.indexOf(item);

		items[index] = {
			...item,
			x: e.target.x(),
			y: e.target.y(),
		};
		setStars(items);
	};
	console.log(stars)
	return (
		<Stage width={window.innerWidth} height={window.innerHeight}>
			<Layer>
				{stars.map((item) => (
					<Circle
						key={item.id}
						name={item.id}
						draggable
						x={item.x}
						y={item.y}
						fill={item.color}
						radius={50}
						onDragStart={handleDragStart}
						onDragEnd={handleDragEnd}
					/>
				))}
			</Layer>
		</Stage>
	);
}

export default Zindex;

/* const Zindex = () => {
	const [items, setItem] = useState(generateItems());

	const handleDrag = (e) => {
		const id = e.target.name();
		const items = items.slice();
		const item = items.find((i) => i.id === id);
		const index = items.indexOf(item);
		items[index] = {
			...item,
			x: e.target.x(),
			y: e.target.y(),
		};
		setItem(items);
	};
	return (
		<Stage width={window.innerWidth} height={window.innerHeight}>
			<Layer>
				{items.map((item) => (
					<Rect
						key={item.id}
						name={item.id}
						x={item.x}
						y={item.y}
						width={item.x}
						height={item.x}
						fill={item.color}
						draggable
						onDragMove={handleDrag}
					/>
				))}
			</Layer>
		</Stage>
	);
};
export default Zindex;
 */