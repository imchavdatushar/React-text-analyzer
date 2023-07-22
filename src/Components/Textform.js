import React, {useState}from 'react';

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleUpclick=() =>{
    // console.log("UpperCase was clicked");
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To Uppercase","success")
  }
  const handleLoclick=() =>{
    // console.log("UpperCase was clicked");
    let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To Lowercase","success")
  }
  
  const handleCapital=() =>{
    // console.log("UpperCase was clicked");
    let newText= text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
    props.showAlert("Text is capitalized","success")
  }
  const handleCopy=()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is Copied","success")
  }
  const handleExtraSpaces=()=>{
    let newtext = text.split(/[ ]+/)
    setText(newtext.join(" "))
    props.showAlert("Extra Spaces Removed","success")
  }
  const handleClear=() =>{
    // console.log("UpperCase was clicked");
    let newText= '';
    setText(newText);
    props.showAlert("Text cleared","success")
  }
    const handleOnchange=(event) =>{
      // console.log("On change");
      setText(event.target.value);

  }
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
  <textarea className="form-control my-3" value={text} onChange={handleOnchange} style={{backgroundcolor:props.mode === 'light'?'grey':'white'}} id="myBox" rows="8"></textarea>
</div>
<button  className="btn btn-primary mx-2" type="button" onClick={handleUpclick}>Convert TO Uppercase</button>
<button  className="btn btn-primary mx-2" type="button" onClick={handleLoclick}>Convert TO Lowercase</button>
<button  className="btn btn-primary mx-2" type="button" onClick={handleCapital}>Capitalized Text</button>
<button  className="btn btn-primary mx-2" type="button" onClick={handleCopy}>Copy Text</button>
<button  className="btn btn-primary mx-2" type="button" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
<button  className="btn btn-primary mx-2" type="button" onClick={handleClear}>Clear Text</button>
</div>
<div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
  <h1>Your Text Summary</h1>
  <p> {text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length}Minutes To read</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
</>

  );
}
