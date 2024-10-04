import { useState, useReducer } from 'react';
import './App.css';

//dispatch = state 업데이트를 위한 요구
//action = 요구 내용
//reducer = state 업데이트 역할

const reducer = (state, action) => {
	console.log('reducer가 일을 합니다.', state, action);
	switch(action.type) {
		case 'deposit':
			return state + action.payload;
		default:
			return state;
	}
}

function App() {
	const[number, setNumber]= useState(0);
	const[money, dispatch] = useReducer(reducer, 0);

  return (
    <div className="App">
		<h2>Reducer은행에 오신 것을 환영합니다.</h2>
		<p>잔고: {money} 원</p>
		<input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} step='1000' />
		<button onClick={() => {
			dispatch({type: 'deposit', payload: number})
		}}>예금</button>
		<button>출금</button>
    </div>
  );
}

export default App;
