import {createContext} from "react";
import Task3 from "./Task3";
const css={color:"purple",fontSize:"50px",textDecoration:"underline"}
const c=createContext(css);
export default function task2(){
    return(
        <Task3/>
    )
}
export {c};