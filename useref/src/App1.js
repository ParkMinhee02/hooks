import { useRef, useState } from 'react';
import './App.css';

function App1() {
	const [count, setCount] = useState(0);
	const countRef = useRef(0);
	console.log('렌더링');
	console.log(countRef);
	const increaseCountState = () => {
		setCount(count + 1)
	};
	const increaseCountRef = () => {
		countRef.current = countRef.current + 1;
		console.log('Ref:', countRef.current)
	};

  return (
    <div className="App">
		<p>State: {count}</p>
		<button onClick={increaseCountState}>State 값 변경</button>
		<p>Ref: {countRef.current}</p>
		<button onClick={increaseCountRef}>Ref 값 변경</button>
    </div>
  );
}

export default App1;
