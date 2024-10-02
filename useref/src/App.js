import { useRef, useState, useEffect } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(1);
	const renderCount = useRef(1);
	const inputRef = useRef('');
	const login = () => {
		alert(`환영합니다. ${inputRef.current.value}`);
		inputRef.current.focus();
	}

	useEffect(()=> {
		// console.log(inputRef);
		inputRef.current.focus();
	},[]);
	useEffect(()=> {
		renderCount.current = renderCount.current + 1;
		// console.log('렌더링 수', renderCount.current);
	});

   return (
      <div className="App">
		<p>Count: {count}</p>
		<button onClick={() => setCount(count + 1)}>Up</button>
		<br />
		<hr />
		<br />
		<h2>Dom 요소 접근</h2>
		<input ref={inputRef} type="text" placeholder='Username' />
		<br />
		<input type="password" placeholder='Userpassword' />
		<br />
		<button onClick={login}>Login</button>
      </div>
   );
}

export default App;

