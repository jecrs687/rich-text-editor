import React,{useState, useEffect, useRef} from 'react';
import './App.css';

function App() {
  const [text, setText]        = useState('');
  const boxText                = useRef()
  const [textDiv, setTextDiv]  = useState('');

  const [selected, setSelected] = useState({
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
      text.split('  *.&**  ');
    },[text])

// main code
  return (
    <div className="App">
      <div>
        <button onClick={
          ()=>{
            
            var temp = textDiv.slice(0, selected.start)+ '  *.&**  ' + textDiv.slice(selected.start, selected.end) + '  *.&**  ' +  textDiv.slice(selected.end, textDiv.length);
            setText(temp)
          }
        }><strong>N</strong></button>
                <button onClick={
          ()=>{
            var temp = textDiv.slice(0, selected.start)+ '  *.&||  ' + textDiv.slice(selected.start, selected.end) + '  *.&||  ' +  textDiv.slice(selected.end, textDiv.length);
            setText(temp)
          }
        }><i>I</i></button>
      </div>
      <div
      className='box-text'
      contentEditable
      ref={boxText}
      suppressContentEditableWarning={true}
      children={text}
      onInput={(value)=>{setTextDiv(value.currentTarget.textContent)}}
        />       
      <button onClick={()=>{console.log()}}>teste ....</button>
    </div>
  );
// end main code


}

export default App;
