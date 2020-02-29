import React from 'react';
import './App.css';
import { useState } from 'react';
import {Button, Button2,Button3} from './components/allComponents'

function App() {
  const [value, setValue] = useState([
  {"text": '',
  "style":{
    fontSize:14,
    fontWeight:'300',
    fontStyle:'normal',
    textAlign:'center'
  }},
])
  const [focus, setFocus] = useState(-1)
  // const [selecteds, setSelects]= useState([]) 
  const [reload, setReload] = useState(true)
  function handleclick(command){
    command = command.props? command.props.children:command;
    var temp=value;
    console.log({...temp[focus].style})
    console.log(command)
    switch(command){
      case 'i':
        if(temp[focus].style.fontStyle==='normal'){
          temp[focus].style.fontStyle='italic'
          setValue(temp)
        }else{
          temp[focus].style.fontStyle='normal'
          setValue(temp)
        }
        break;
      case "size+":
        temp[focus].style.fontSize=temp[focus].style.fontSize+1
        setValue(temp)
        break;
      case "h1":
        temp[focus].style={
          fontSize:30,
          fontWeight:'900',
          fontStyle:'normal',
          textAlign:'center'
        }
        setValue(temp)
        break;
      case "h2":
        temp[focus].style={
          fontSize:24,
          fontWeight:'900',
          fontStyle:'normal',
          textAlign:'center'
        }
        setValue(temp)
        break;
      case "h3":
        temp[focus].style={
          fontSize:18,
          fontWeight:'300',
          fontStyle:'normal',
          textAlign:'center'
        }
        setValue(temp)
        break;
      case "h4":
        temp[focus].style={
          fontSize:16,
          fontWeight:'300',
          fontStyle:'normal',
          textAlign:'center'
        }
        setValue(temp)
        break;
      case "h5":
        temp[focus].style={
          fontSize:12,
          fontWeight:'300',
          fontStyle:'normal',
          textAlign:'center'
        }
        setValue(temp)
        break;
            
      case "size-":
        temp[focus].style.fontSize=temp[focus].style.fontSize-1
        setValue(temp)
        break;
      case "n":
        if(temp[focus].style.fontWeight==='300'){
          temp[focus].style.fontWeight='900'
          setValue(temp)
        }
        else{temp[focus].style.fontWeight='300'
        setValue(temp)
      }
        break;
      default:
        temp[focus].style.textAlign=command
        setValue(temp)
        break;
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

  // function write(target){
  //   text = target
  //   console.log(text)
  //   var temp = value
  //   temp[focus].text = text
  //   setValue(temp)
  //   setReload(!reload)

  // }
  
  function addText(){
    var temp = value;
    temp.splice(focus+1, 0,   
      {"text": '',"style":{...value[focus].style}})
    setValue(temp)
    setReload(!reload)

  }
  function removeText(){
    var temp = value;
    temp.splice(focus,1)
    setValue(temp)
    setReload(!reload)

  }
  return (
    <div className="App">
      <div className="App-head">
        <div className="App-head-box">

          <Button value={value[focus]} onClick={handleclick}><strong>n</strong></Button>
          <Button value={value[focus]} onClick={handleclick}><i>i</i></Button>
          <Button2 onClick={handleclick}>size+</Button2>
          <Button2 onClick={handleclick}>size-</Button2>
        </div>
        <div className="App-head-box">

        <Button value={value[focus]} onClick={handleclick}><i>justify</i></Button>
          <Button value={value[focus]} onClick={handleclick}><i>right</i></Button>
          <Button value={value[focus]} onClick={handleclick}><i>center</i></Button>
          <Button value={value[focus]} onClick={handleclick}><i>left</i></Button>
          </div>
        <div className="App-head-box">
          
          <Button3 onClick={handleclick}><i>h1</i></Button3>
          <Button3 onClick={handleclick}><i>h2</i></Button3>
          <Button3 onClick={handleclick}><i>h3</i></Button3>
          <Button3 onClick={handleclick}><i>h4</i></Button3>
          <Button3 onClick={handleclick}><i>h5</i></Button3>

        </div>
        {value[focus]?
        <div className="App-head-box">
        <h4>fontSize: {value[focus].style.fontSize} | fontStyle: {value[focus].style.fontStyle} | fontWeight: {value[focus].style.fontWeight}</h4>
         </div>:null}
      </div>
      <div className="App-body"> 
          {
          value.map((data,index)=>(
            <div className="App-body-box" key={index}>
              {index===focus?
            <button  className="Button" onClick={()=>{addText()}}>+</button>:<div className="Button"/>}
            {index===focus && value.length>1?
            <button  className="Button" onClick={()=>{removeText()}}>-</button>:<div className="Button"/>}
            <div 
            onBlurCapture={(value)=>{console.log(value)}}
            contentEditable="true" 
            placeholder="write here" 
            style={{...data.style}} 
            className="App-box" 
            type="text" 
            data-text="Enter text here"
            // onInput={(all)=>{write(all.currentTarget.textContent)}}
            // onChange={(all)=>{console.log(all)}}
            onFocus={()=>{setFocus(index)}}>
              {value.text}
              
              </div> 
            </div>
            ))
            }
        </div>
      <div className="App-footer">

        this is an open-source project by: 
        <a href="https://jecrs687.github.io/">@jecrs687</a>
      </div>
    </div>
  );
}

export default App;
