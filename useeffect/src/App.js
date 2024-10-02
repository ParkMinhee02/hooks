import { useEffect, useState } from 'react';
import Timer from './components/Timer';

function App() {

	//화면에 첫 렌더링(Mount)
	//재 렌더링 (Update)
	//화면에서 사라질 때 (Unmount)

	useEffect(()=> {
		//작업
		return () => {
			//해지 작업 Clean Up
		}
	},[]) //Dependency 속성명: 해당 속성 값이 바뀔 때 재렌더링, 비어있을 때: 한 번만 렌더링

	const [count, setCount] = useState(1);
	const [name, setName] = useState('');
	const [showTimer, setShowTimer] = useState(false);
	const countUpdate = () => {setCount(count + 1)};
	useEffect(()=> {
		console.log('렌더링')
	},[]);
	const inputChange = (e) => {
		setName(e.target.value)
	}

  return (
    <div className="App">
		<div className="count">
			<button onClick={countUpdate}>Update</button>
			<br />
			<span>Count: {count}</span>
			<br />
			<input type="text" value={name} onChange={inputChange} />
			<br />
			<span>Name: {name}</span>
		</div>
		<br />
		<hr />
		<br />
		<div className="cleanup">
			{showTimer && <Timer />}
			<button onClick={() => {setShowTimer(!showTimer)}}>Toggle Timer</button>
		</div>
    </div>
  );
}

export default App;
