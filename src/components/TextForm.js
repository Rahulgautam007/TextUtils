import React, { useState } from 'react';

function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    };

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    };

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Deleted", "success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState('');

    return (
        <>
<div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
<h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" id="my-box" rows="8" value={text} onChange={handleOnChange} style={{
backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
 color: props.mode === 'dark' ? 'white' : 'black'
}}></textarea>
 </div>
<button disabled={text.length === 0}type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled={text.length === 0} type="button" className="btn btn-primary mx-3 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
<button disabled={text.length === 0} type="button" className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear text</button>
</div>

<div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
<h1>Your Text Summary</h1>
<p>{text.split(" ").filter(word => word.length > 0).length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").filter(word => word.length > 0).length} Minutes to read</p>
<h3>Preview</h3>
<p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
</div>
 </>
    );
}

export default TextForm;
