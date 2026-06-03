import {useEffect,useState} from "react";
import axios from "axios";
export default function A1(){
    const[joke,setjoke]=useState(" ");
    function fetchjoke(){axios
        .get("https://official-joke-api.appspot.com/random_joke")
        .then((r)=>{
            setjoke(r.data);
        })
        .catch((e)=>{
            console.log(e)
        })
    }
    useEffect(fetchjoke,[])
    return(
        <>
        <h2>{joke.setup}</h2>
        <h3>{joke.punchline}</h3>
        <button onClick={fetchjoke}>Generate Joke</button>
        </>
    )
}