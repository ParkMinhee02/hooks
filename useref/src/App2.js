import {useRef, useState} from 'react';
import './App.css';

function App2() {
   const [render, setRender] = useState(0);
   const countRef=useRef(0);

   let countVar=0;

   const doRendering = () => {
	setRender(render + 1);
   };
   const increaseVar = () => {
	countVar = countVar + 1;
	console.log('var:', countVar);
   };
   const increaseRef = () => {
	countRef.current = countRef.current + 1;
	console.log('Ref:', countRef.current);
   };
   const printResults = () => {
	console.log(`Var: ${countVar}, Ref: ${countRef.current}`);
   };
   
   return (
      <div className="App">
		<p>Var: {countVar}</p>
		<p>Ref : {countRef.current}</p>
		<button onClick={doRendering}>Render</button>
		<button onClick={increaseVar}>Var Update</button>
		<button onClick={increaseRef}>Ref Update</button>
		<button onClick={printResults}>모든 값 출력</button>
      </div>
   );
}

export default App2;

