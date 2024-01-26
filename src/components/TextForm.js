import React, {useState} from 'react'
// import React, { PureComponent } from 'react'


  

export default function TextForm(props) {
  const handleUpClick = ()=> {
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }
  const handleLowClick = ()=> {
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  }
  const handleExtraspaces = ()=> {
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }
  const handleClClick = ()=> {
    let newText='';
    setText(newText);
    props.showAlert("Text cleared!", "success");
  }
  const handlePasteClick = () => {
    navigator.clipboard.readText().then((newText) => {
      setText(text + newText );
      props.showAlert("Text Pasted From Clipboard", "success");
    });
}
  const handleCopyClick = ()=> {
    // var text=document.getElementById("MyBox");
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Text copied to clipboard!", "success");
  }
  const handleOnChange = (event)=> {
    setText(event.target.value);
  }
  const [text, setText] = useState('');
 
  // setText("new text");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
         <h1>{props.heading}</h1>
          <div className="mb-3">
      
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode ==='dark'?'white':'black'  }} id="MyBox" rows="8"></textarea>
          </div>
          <button disabled={text.length===0} className={`btn btn-primary mx-2 my-2`} onClick={handleUpClick}>Convert to Uppercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClClick}>Clear Text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
          <button  className="btn btn-primary mx-2 my-2" onClick={handlePasteClick}>Paste Text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraspaces}>Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black' }}>
      <h2>Your text summary</h2>
      <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length}  Minutes read</p>
      <h2>Preview</h2>
      <p> {text.length>0 ?text: "Nothing to preview it here"}</p>
    </div>
    </>
  )
}
