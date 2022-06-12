import React from "react";

function GroceryInput({getGrocery})
{
    const [input,setInput]=React.useState("");
    const handleAdd=()=>
    {
        const payload=
        {
            title:input,
            status:false
        }
        fetch(`http://localhost:3001/grocery`,
        {
            method:"POST",
            body:JSON.stringify(payload),
            headers:{"Content-type": "Application/json"}
        });
        setInput("");
        getGrocery();
    }
    


    return(
        <div
        style={{textAlign:"center"}}>
        <input 
        style={{height:"25px"}}
        type="text"
        value={input} 
        onChange={(event)=>(
            setInput(event.target.value)
        )}/>
        <button 
        style={{height:"30px"}}
        onClick={()=>{
            handleAdd()}
            }>ADD</button>
        </div>
    );
}

export default GroceryInput;
