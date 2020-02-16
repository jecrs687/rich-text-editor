import React from 'react';
import '../App.css';
import { useState } from 'react';

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