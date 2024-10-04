import './App.css';
import {useCallback, useState} from 'react';
import Box from './Box'

function App() {
   const [size, setSize] = useState(100);
   const [isDark, setIsDark] = useState(false);
   const createBoxStyle = useCallback(() =>{
      return{
         backgroundColor:'pink',
         width:`${size}px`,
         height:`${size}px`,
      };
   },[size]);
   
   return (
      <div className="App" style={{background:isDark? 'black' : 'white'}}>
         <input type="number" value={size} onChange={(e)=> setSize(e.target.value)} />
		 <button onClick={(e) => setIsDark(!isDark) }>Theme Change</button>
         <Box createBoxStyle={createBoxStyle} />
      </div>
   );
}

export default App;
