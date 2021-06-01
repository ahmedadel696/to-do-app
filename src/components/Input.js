import React,{useState} from 'react'

function Input(props) {

    const [inputItem, setInputItem] = useState("");
    const handleInputEvent =(event)=>{
        const newInput = event.target.value;
        setInputItem(newInput)
    }
    return (
        <div className="form">
            <input type="text" onChange={handleInputEvent} value={inputItem}/> 
            <button onClick={()=>{
                props.onAdd(inputItem);
                setInputItem("")
            }}><span>Add</span></button>     
        </div>
    )
}

export default Input
