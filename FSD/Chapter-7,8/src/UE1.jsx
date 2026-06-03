import {useEffect,useState} from "react";
function UE1(){
    const[count,setcount]=useState(0);
    const[count1,setcount1]=useState(0);
    useEffect(()=>alert("Effect"))
    return(
        <>
        <button onClick={()=>setcount(count+1)}>Button A {count}</button>
        <button onClick={()=>setcount1(count1+1)}>Button B {count1}</button>
        </>
    )
}
export default UE1;