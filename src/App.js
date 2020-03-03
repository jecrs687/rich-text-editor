import React,{useState, useEffect, useRef} from 'react';
import './App.css';

function App() {
  const [text, setText]          = useState('');
  const [text2, setText2]        = useState('');
  const boxText                  = useRef()
  const [textDiv, setTextDiv]    = useState('');

  const [selected, setSelected]  = useState({
      "start": 0,
      "end"  : 0
  })

  document.onselectionchange = () => {

   var start = document.getSelection().anchorOffset - document.getSelection().extentOffset>0?document.getSelection().extentOffset:document.getSelection().anchorOffset
   var end   = document.getSelection().extentOffset - document.getSelection().anchorOffset>0?document.getSelection().extentOffset:document.getSelection().anchorOffset

    setSelected({
      "start":start,
      "end"  :end,

    })  };

    useEffect(()=>{
      boxText.current.innerHTML = text
      console.log(boxText.current.innerHTML)
    },[text])

// main code
  return (
    <div className="App">
      <div>
        <button onClick={
          ()=>{
            
            var temp = textDiv.slice(0, selected.start)+ '<strong>' + textDiv.slice(selected.start, selected.end) + '</strong>' +  textDiv.slice(selected.end, textDiv.length);

            setText(temp)
          }
        }><strong>N</strong></button>
                <button onClick={
          ()=>{
            var temp = textDiv.slice(0, selected.start)+ '<i>' + textDiv.slice(selected.start, selected.end) + '</i>' +  textDiv.slice(selected.end, textDiv.length);
            setText(temp)
          }
        }><i>I</i></button>
      </div>
      <div
      className='box-text'
      contentEditable
      ref={boxText}
      children={text}
      suppressContentEditableWarning
      onInput={(value)=>{setTextDiv(value.currentTarget.textContent)}}
        />       
      <button onClick={()=>{console.log()}}>teste ....</button>
    </div>
  );
// end main code


}

export default App;
