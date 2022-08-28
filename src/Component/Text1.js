import React,{useState} from 'react'

export default function Text1(prop) {
    const[Text,setText] = useState(prop.heading)
    const[vowelCount, setVowelCount] = useState(0)

    const HandleUperCase = () =>{
        let new_text = Text.toUpperCase();
        setText(new_text)
        prop.show_alert("success","Converted to Upper Case")
    }

    const HandleLowerCase =()=>{
        let new_text1 = Text.toLowerCase();
        setText(new_text1)
        prop.show_alert("success","Converted to Lower Case")
    }

    const HandleVowelCase = ()=>{
        // debugger;
        setVowelCount(Text.toLowerCase().match(/[aeiou]/gi).length)
        prop.show_alert("success","Total Vowels Below ")
    }

    const  handleonchange= (event)=>{
            // console.log("on change");
            setText(event.target.value)
          
        }
        // debugger

    return (
    <>
    <div className='container'style={{color:prop.Mode==='light'?'black':'white'}} >
        <h1>{prop.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={Text} style={{backgroundColor:prop.Mode==='light'?'white':'grey',color:prop.Mode==='light'?'black':'white'}} onChange = {handleonchange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary " disabled={Text.length===0} onClick={HandleUperCase}>Convert into uppercase</button>
        <button className="btn btn-primary mx-4 my-1"  disabled={Text.length===0} onClick={HandleLowerCase}>Convert into lowercase</button>
        <button className="btn btn-primary  my-1"  disabled={Text.length===0} onClick={HandleVowelCase}>Total Vowels into</button>
    </div>
    <div className="container my-3"style={{color:prop.Mode==='light'?'black':'white'}}>
        <h>Text Summary</h>
        <p>{(Text.split(/\s+/).filter((elemnt)=>{return elemnt.length!=0}).length)} Words, {Text.length}  Characters</p>
        <p>{0.008 * Text.split(" ").filter((elemnt)=>{return elemnt.length!=0}).length} Minutes</p>
        <h2>Preview:</h2>
        <p>{Text.length>0?Text:"Preview Here"}</p>
        <h2>Vowel Count:</h2>
        <p>{vowelCount}</p>
    </div>
    </>
  )
}
