import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        const newText = text.toUpperCase();
        setText(newText);
    }
    const handleloClick = () => {
        const newText = text.toLowerCase();
        setText(newText);
    }
    const handleEraseClick = () => {
        const newText = '';
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

  const [text, setText] = useState("Enter your text here")
  return (
    <>
    <div>   
        <h1><center>{props.title}</center></h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-3" onClick={handleloClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-3" onClick={handleEraseClick}>Clear Text</button>
    </div>

    <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minute time is required to read thge whole text</p>
        <p>Preview</p>
        <p>{text}</p>
    </div>

    </>
  )
}
