import React from 'react';
import './App.css';
import { useState } from 'react';
function Button({children, onClick}){
  const [isSelected, select]= useState(false) 
  return(
      <button 
      style={{backgroundColor:isSelected? '#bbb': '#eee'}} 
      onClick={()=>{onClick(children);select(!isSelected)}} >
        {children}
      </button>
    )
}
function App() {
  const [value, setValue] = useState("")
  const [selecteds, setSelects]= useState([]) 
  var text;
  function handleclick(value){
    value = value.props? value.props.children:value;
    if(selecteds.indexOf(value)===-1){
      setSelects([...selecteds,value])
    }else{
      var temp = selecteds;
      temp.splice(selecteds.indexOf(value),1);
      setSelects(temp)
    }
    console.log(selecteds)
  }
  function write({target}){
    text = target.value
    console.log(text)
    setValue(target.value)

  }
  return (
    <div className="App">
      <div className="App-head">
        <Button onClick={handleclick}><strong>n</strong></Button>
        <Button onClick={handleclick}><i>i</i></Button>
        <Button onClick={handleclick}>size+</Button>
        <Button onClick={handleclick}>size-</Button>
      </div>
      <div className="App-body"> 
        <textarea className="App-box"  type="text" value={value} onChange={write} />
        <div className='App-box'>
          <texto text={text}/>
        </div>
      </div>
      <div className="App-footer">
        this is an open-source project by: 
        <a href="https://jecrs687.github.io/"> @jecrs687</a>
      </div>
    </div>
  );
}

export default App;
