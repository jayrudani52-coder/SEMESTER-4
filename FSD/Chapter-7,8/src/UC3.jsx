import {useContext} from "react";
import {Fname,Lname} from "./UC1";
export default function UC3(){
    const fname=useContext(Fname);
    const lname=useContext(Lname);
    return(
        <>
        <h2>Welcome {fname} {lname}</h2>
        </>
    )
}