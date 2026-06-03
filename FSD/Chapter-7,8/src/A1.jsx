import {useEffect,useState} from "react";
import axios from "axios";
export default function A1(){
    const[image,setimage]=useState(" ");
    useEffect(()=>{
        setInterval(()=>{axios
            .get("https://dog.ceo/api/breeds/image/random")
            .then((res)=>{
                console.log(res.data);
                setimage(res.data)
            })
            .catch((e)=>{
                console.log(e)
            })
        },2000)
    },[])
        return(
            <>
            <img src={image.message} alt="Image" width="300px" height="300px"/>
            </>
        )
    }