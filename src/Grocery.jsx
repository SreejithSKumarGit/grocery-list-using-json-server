import React from "react";
import GroceryInput from "./GroceryInput";
import GroceryList from "./GroceryList";

function Grocery()
{
    const[grocery,setGrocery]=React.useState([]);
    const getGrocery=()=>
    {
        fetch(`http://localhost:3001/grocery`)
        .then((res)=>res.json())
        .then((res)=>
        {
            setGrocery(res)
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    React.useEffect(
        ()=>{
            getGrocery();
        },[]);
    
    return (
        <>
        <h1 style={{textAlign:"center"}}>Grocery</h1>
        <GroceryInput getGrocery={getGrocery}/>
        <GroceryList grocery={grocery} getGrocery={getGrocery}/>
        </>
    );
}
export default Grocery;