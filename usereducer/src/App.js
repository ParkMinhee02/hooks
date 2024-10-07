import { useState, useReducer } from 'react';
import './App.css';

//dispatch = state 업데이트를 위한 요구
//action = 요구 내용
//reducer = state 업데이트 역할

const ACTION_TYPES = {
	diposit:'dkfjekorw',
	withdraw: 'withdraw'
}
const reducer = (state, action) => {
	console.log('reducer가 일을 합니다.', state, action);
	switch(action.type) {
		case ACTION_TYPES.deposit:
			return state + action.payload;
		case ACTION_TYPES.withdraw:
			return state - action.payload;
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
			dispatch({type: ACTION_TYPES.deposit, payload: number})
		}}>예금</button>
		<button onClick={() => {
			dispatch({type: ACTION_TYPES.withdraw, payload: number})
		}}>출금</button>
    </div>
  );
}

export default App;
