import React, {useState, useEffect} from 'react';

function HookMouse(){
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const logMousePostion = (e) =>{
		console.log('Mouse Event');
		setX(e.clientX);
		setY(e.clientY);
	}
	useEffect(() => {
		console.log('UseEffect Called');
		window.addEventListener('mousemove', logMousePostion);

		return() => {
		console.log('Component Unmount');
		window.removeEventListener('mousemove', logMousePostion);
	}
	}, []);
  return (
    <div>
    Hooks: X - {x} Y - {y}
    </div>
  )
}

export default HookMouse;