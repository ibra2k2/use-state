import React, {useState, useEffect} from 'react';

function HookCounter(){
	const [count, setCount] = useState(0);
	const [name, setName] = useState('');
	useEffect(()=>{
		console.log('UseEffect - Updated Document Title');
		document.title = `Click ${count} here`
	}, [count])
  return (
    <div>
        <input type="text" value = {name} onChange={(e)=>setName(e.target.value)} />
    	<button onClick={()=>setCount(count + 1)}>Count: {count}</button>
    </div>
  )
}

export default HookCounter;