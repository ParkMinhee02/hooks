import { useId } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyInput />
    </div>
  );
}
function MyInput() {
	const id = useId();
	return (
		<div>
			<label htmlFor={`${id}-name`}>이름</label>
			<input type="text" id={`${id}-name`} />
			<br />
			<label htmlFor={`${id}-age`}>나이</label>
			<input type="text" id={`${id}-age`} />
		</div>
	)
}

export default App;
