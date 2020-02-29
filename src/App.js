import React,{useState} from 'react';
import './App.css';

function App() {
  const [text, setText] = useState();
  function Words({value}){
   
    return(
      <div 
      contentEditable
      // onInput={(value)=>{console.log(value)}}
      onWheel={(value)=>{console.log(value.type)}}
      >
        {value}    
      </div>
      )
  }
  return (
    <div className="App">
       <Words value={text}/>
    </div>
  );
}

export default App;
