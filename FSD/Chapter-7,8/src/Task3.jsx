import {student} from "./Task1";
import {c} from "./Task2";
import {useContext} from "react";
export default function Task3(){
    var data=useContext(student);
    var mycss=useContext(c);
    return(
        <>
        <h1 style={mycss}>Student Data</h1>
        <table border="2">
            {
                data.map((d)=>
                <tr key={d.id}><td>{d.i}</td>
                <td>{d.name}</td>
                <td>{d.marks}</td></tr>)
            }
        </table>
        </>
    )
} 
