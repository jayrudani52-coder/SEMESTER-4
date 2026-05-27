import {useState} from "react";
function US1(){
    const [count,setcount]=useState(0);
    function handlecount(){
        setcount(count+1);
    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={handlecount}>Click</button>
        </>
    )
}
export default US1;