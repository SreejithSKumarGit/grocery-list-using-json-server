import React from "react";

function GroceryList({grocery,getGrocery})
{
    
    const handleDelete=(id)=>
    {
        fetch(`http://localhost:3001/grocery/${id}`,
        {
            method:"DELETE",
            headers:{"Content-type":"Application/json"}
        })
        getGrocery();

    }
    

    return (
        <>
        {    grocery.map((item)=>
           (   
             <div
             key={item.id}
             style={{
                 display:"grid",
                 width:"32%",
                 gridTemplateColumns:"repeat(2,1fr)",
                 margin:"auto"
             }}>
                 <h3>{item.title}</h3>
                 <button
                 style={{
                     height:"25px",
                     marginTop:"23px"
                 }} 
                 onClick={()=>(
                     handleDelete(item.id)
                 )
                }>Delete</button>
            </div>
           )
            )
        }
        </>
    )
}

export default GroceryList;