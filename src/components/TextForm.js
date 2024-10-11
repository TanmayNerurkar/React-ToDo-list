import React, {useState} from 'react'

export default function TextForm(props) {
    let handleOnChange = (event) => {
        console.log("On change")
        setText(event.target.value)
    }

    let handleUpChange = () => {
        console.log("Clicked on Uppercase")
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to Uppercase!", "success");
    }

    let handleLoChange = () => {
        console.log("Clicked on Lowercase")
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to Lowercase!", "success");
    }
    let handleClrChange = () => {
        console.log("Cleared Text!")
        let newtext = "";
        setText(newtext)
        props.showAlert("Cleared Text!", "success");
    }
    
    let handleCopy = () => {
        var newtext = document.getElementById('myBox');
        newtext.select();
        navigator.clipboard.writeText(newtext.value);
        props.showAlert("Copied to ClipBoard", "success");
    }

    let handleExtraSpace = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Removed Extra Space", "success");
    }


    const [text, setText] = useState("")
    return (
        <>
            <div className='container my-4' style={{ color: props.mode==='dark'?'white':'black'}} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" style={{
                        backgroundColor: props.mode === 'dark' ? '#1c2b60':'white' , color: props.mode === 'dark' ? 'white' : 'black'
                    }} placeholder='Enter Text Here' rows="8"></textarea>
                </div>
            <button className="btn btn-primary mx-2 my-1" onClick={handleUpChange}  >UpperCase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleLoChange}  >LowerCase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleClrChange}  >Clear</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}  >Copy Text</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}  >Remove Extra Space</button>
            </div>
            <div className="container my-2" style={{ color: props.mode==='dark'?'white':'black'}}>
                <h2>
                    Your Text Summary
                </h2>
                <p>Words = {text.split(" ").filter((element) => { return element.length!==0}).length}</p>
                <p>Characters = {text.length}</p>
                <p>Minutes = {0.008 * text.split(" ").filter((element) => { return element.length!==0}).length}</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter text in above text box to preview"}</p>
            </div>
        </>
  )
}
