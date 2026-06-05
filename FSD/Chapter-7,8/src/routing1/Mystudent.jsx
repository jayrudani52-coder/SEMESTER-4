import React from "react";
export default function Mystudent(props){
    return(
        <table border="2">
            {
                props.data.map((s)=>
                <tr key={s.rollno}>
                    <td>{s.rollno}</td>
                    <td>{s.name}</td>
                    <td>{s.marks}</td>
                    <td><img src={s.photo} width="150" height="150"/></td>
                </tr>)
            }
        </table>
    )
}