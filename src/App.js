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
function Button2({children, onClick}){
  return(
      <button  
      style={{backgroundColor: '#eee'}} 

      onClick={()=>{onClick(children);}} >
        {children}
      </button>
    )
}

function Text({text}){

  return(
    <p>{text}</p>
  )
}

function App() {
  const [value, setValue] = useState("")
  // const [selecteds, setSelects]= useState([]) 
  const [reload, setReload] = useState(true)
  const [style, setStyle] = useState({
    fontSize:14,
    fontWeight:'300',
    fontStyle:'normal'
  })
  var text;
  function handleclick(value){
    value = value.props? value.props.children:value;
    var temp=style;
    console.log({...style})
    console.log(value)
    switch(value){
      case 'i':
        if(temp.fontStyle==='normal'){
          temp.fontStyle='italic'
          setStyle(temp)
        }else{
         temp.fontStyle='normal'
          setStyle(temp)
        }
        break;
      case "size+":
        temp.fontSize=temp.fontSize+1
        setStyle(temp)
        break;
      case "size-":
        temp.fontSize=temp.fontSize-1
        setStyle(temp)
        break;
      case "n":
        if(temp.fontWeight==='300'){
         temp.fontWeight='900'
          setStyle(temp)}
        else{temp.fontWeight='300'
          setStyle(temp)}
        break;
      default:
        break
      }
      setReload(!reload)
    // if(selecteds.indexOf(value)===-1){
    //   setSelects([...selecteds,value])
    // }else{
    //   temp = selecteds;
    //   temp.splice(selecteds.indexOf(value),1);
    //   setSelects(temp)
    // }
    // console.log(selecteds)
  }
  function write({target}){
    text = target.value
    console.log(value)

    setValue(target.value)

  }
  return (
    <div className="App">
      <div className="App-head">
        <div className="App-head-box">

          <Button onClick={handleclick}><strong>n</strong></Button>
          <Button onClick={handleclick}><i>i</i></Button>
          <Button2 onClick={handleclick}>size+</Button2>
          <Button2 onClick={handleclick}>size-</Button2>
        </div>
        <div className="App-head-box">
          <h4>fontSize: {style.fontSize} | fontStyle: {style.fontStyle} | fontWeight: {style.fontWeight}</h4>

         </div>
      </div>
      <div className="App-body"> 
        <textarea style={{...style}} className="App-box"  type="text" value={value} onChange={write} />
        <div className='App-box'>
          <Text text={text}/>
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
