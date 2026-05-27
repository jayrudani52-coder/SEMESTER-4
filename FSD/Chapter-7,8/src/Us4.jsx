import { useState } from "react";
import img1 from "./assets/hero.png"
import img2 from "./assets/img1.png"
import img3 from "./assets/img2.png"
import img4 from "./assets/img3.png"
import img5 from "./assets/react.svg"
import img6 from "./assets/vite.svg"
function Us4(){
    const arr=[img1,img2,img3,img4,img5,img6];
    const [image,setimage]=useState(arr[0]);
    function handleimage(){
        const i=Math.floor(Math.random()*arr.length);
        setimage(arr[i]);
    }
    return(
        <>
        <img src={image} width="300" />
        <button onClick={handleimage}>Change Image</button>
        </>
    )
}
export default Us4;