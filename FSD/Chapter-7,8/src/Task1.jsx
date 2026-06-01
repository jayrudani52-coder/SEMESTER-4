import {createContext} from "react";
import Task2 from "./Task2";
var s=[{name:"ABC",marks:20,id:1},
       {name:"PQR",marks:23,id:2}]
const student=createContext();
export default function Task1(){
    return(
        <student.Provider value={s}>
            <Task2/>
        </student.Provider>
    )
}
export {student}