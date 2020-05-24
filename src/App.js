import React,{useState, useEffect, useRef} from 'react';
import './App.css';

function App() {
  const [text, setText]          = useState({});
  const boxText                  = useRef()

  const [selected, setSelected]  = useState({
      "start": 0,
      "end"  : 0
  })

  document.onselectionchange = () => {

   var start = window.getSelection().anchorOffset - document.getSelection().extentOffset>0?document.getSelection().extentOffset:document.getSelection().anchorOffset
   var end   = window.getSelection().extentOffset - document.getSelection().anchorOffset>0?document.getSelection().extentOffset:document.getSelection().anchorOffset
    setSelected({
      "start":start,
      "end"  :end,

    })  };

    useEffect(()=>{  
      // boxText.getSelection()
    },[])

// main code
  return (
    <div className="App">
      <div className="top">
        <button><strong>N</strong></button>
        <button><i>I</i></button>
        <input type="text" placeholder="size" defaultValue="12"></input>
      </div>
      <div
          className='box-text'
          placeholder="insert text"
          contentEditable
          ref={boxText}
          onSelectCapture={(value)=>{console.log(selected)}}
          // onInput={()=>{console.log(boxText.current.childNodes)}}
          suppressContentEditableWarning
      />       
      <button>teste ....</button>
    </div>
  );
// end main code


}

export default App;
