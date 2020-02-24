import React, { useState } from 'react';
import '../App.css';

export function Button({children, onClick, value}){
    
    return(
        <button 
        style={{backgroundColor:'#eee'}} 
        onClick={()=>{onClick(children);}} >
          {children}
        </button>
      )
  }
export function Button2({children, onClick}){
    return(
        <button  
        style={{backgroundColor: '#eee'}} 
  
        onClick={()=>{onClick(children);}} >
          {children}
        </button>
      )
  }
  
export function Text({value, write,key, focus}){
    const {style, text} = value
    function changeText({target}){
        write({value:target})
    }    
    return(
      <input style={{...style}} className="App-box" type="text" value={text} onChange={(target)=>{changeText(target)}} />  )
  }

export function Word({children}){
  const [select, setSelect] = useState(false)
  return(
    <div>
      
      {children}
    </div>
  )
}