import { useEffect, useMemo, useState } from 'react';
import './App.css';

function App() {
	const [number, setNumber] = useState(0);
	const [isKorea, setIsKorea] = useState(true);

	const location = useMemo(()=> {
		return {
			country: isKorea ? '한국' : '외국'
		};
	},[isKorea]);
	useEffect(() => {
		console.log('useEffect 호출')
	},[location]);

  return (
    <div className="App">
		<h2>하루에 몇 끼 먹나요?</h2>
		<input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
		<hr />
		<h2>어느나라에 살아요?</h2>
		<p>나라: {location.country}</p>
		<button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
    </div>
  );
}

export default App;
