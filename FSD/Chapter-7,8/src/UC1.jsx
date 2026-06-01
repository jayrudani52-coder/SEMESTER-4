import {createContext} from "react";
import UC2 from "./UC2";
var Fname=createContext("A");
var Lname=createContext();
export default function UC1(){
    return(
        <>
        <Fname.Provider value="Abc">
            <Lname.Provider value="Xyz">
                <UC2/>
            </Lname.Provider>
        </Fname.Provider>
        </>
    )
}
export {Fname,Lname};