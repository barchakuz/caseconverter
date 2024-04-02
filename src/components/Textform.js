import React, {useState} from 'react'


export default function Textform(props) {
    const[text,setText]= useState('');
    const UpperCaseButton= ()=>{
        
        let newText= text.toUpperCase(); 
        setText(newText)
        props.showAlert("Upper Case Converted!")
    }

    const Clear=()=>{
    let newText= ('');
    setText(newText)
    props.showAlert("Text Removed!")
    }
    const LowerCaseButton= ()=>{
        
        let newText= text.toLowerCase(); 
        setText(newText)
        props.showAlert("Lower Case Converted!")
    }
    const handleOnChange= (event)=>{
        
        setText(event.target.value);
    }
    
  return (
    <>
    <div className="container">
    <div>
                <div className="mb-3 " style={{color: (props.mode ==='dark'?'white' :'black')}}>
                    <h1>{props.heading} </h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'#7a7676' :'white' , color : props.mode ==='dark'?'white' :'black' }} id="myBox" rows="8"></textarea>
            </div>
           <button className="btn btn-primary" onClick={UpperCaseButton}>Convert to Upper case</button>
           <button className="btn btn-primary mx-3" onClick={LowerCaseButton}>Convert to Lower case</button>
           <button className="btn btn-primary mx-2" onClick={Clear}>Clear Text</button>

    </div>
    </div>
    <div className="container my-3" style={{color: (props.mode ==='dark'?'white' :'black')}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length } Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
