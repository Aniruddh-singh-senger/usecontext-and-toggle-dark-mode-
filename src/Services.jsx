import { useState } from "react";



const Services = () => {

    const [text, setText] = useState("")

    const uppercase = () => {
        const test = text.toUpperCase();
        setText(test);
    }

    const COPYIT = () => {
        navigator.clipboard.writeText(text);
        alert("text copied successfully");
    };

    const lowercase = () => {
        const newtext = text.toLowerCase();
        setText(newtext)
    }

    const clear = () => {
        setText("")
    }

    const handletext = (e) => {
        setText(e.target.value)
    }

    return (
        <>

            <div className="container my-5 mb-3" >
                <h1>enter the text to analyze below</h1>
                <label htmlfor="mybox" className="form-label">type here</label>
                <textarea className="form-control" value={text} onChange={handletext} id="mybox" rows="8"></textarea>
                <button disabled={text.length === 0} onClick={uppercase} className='btn btn-primary mx-2 my-3'>convert to uppercase</button>
                <button disabled={text.length === 0} onClick={lowercase} className='btn btn-danger mx-2 my-3'>Convert to Lowercase</button>

                <button disabled={text.length === 0} onClick={COPYIT} className='btn btn-secondary mx-2 my-3'>Copy text</button>

                <button disabled={text.length === 0} onClick={clear} className='btn btn-success mx-2  my-3'>Clear all</button>
            </div>
            <div className="container">
                <h2>your text summary</h2>
                <p> {text.split(/\s+/).filter((elem) => elem.length !== 0).length}  words and {text.length} charcters </p>
                <p> {0.008 * text.split(/\s+/).filter((elem) => elem.length !== 0).length} Minutes you read this text</p>
                <h1>preview</h1>
                <p>{text.length > 0 ? text : "nothing to preview!"}</p>

            </div>
        </>
    )
}

export default Services;
