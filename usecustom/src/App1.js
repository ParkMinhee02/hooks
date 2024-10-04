import {useInput} from './useInput';
import './App.css';


function displayMessage(message){
   alert(message)
}
function App() {
   const [inputValue, handleChange, handleSubmit] = useInput('하하하하', displayMessage);
   
   return (
      <div className="App">
      <h1>useInput</h1>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>확인</button>
      </div>
   );
}

export default App;
