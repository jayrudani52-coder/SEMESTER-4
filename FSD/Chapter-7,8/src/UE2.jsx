import {useEffect,useState} from "react";
function UE2(){
    const[date,setdate]=useState(new Date());
    useEffect(()=>{
        const timer=setInterval(()=>{
            setdate(new Date())
        },1000)
    },[])
    return(
        <>
        <h1>
            {date.toLocaleTimeString()}
        </h1>
        <h3>
            {date.getHours()} Hours 
            and {date.getMinutes()} Minutes 
            and {date.getSeconds()} Seconds  
        </h3>
        </>
    )
}
export default UE2;