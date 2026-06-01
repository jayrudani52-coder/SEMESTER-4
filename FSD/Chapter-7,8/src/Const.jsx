import {createContext} from "react";
import Const1 from "./Const1";
var obj={n1:2,n2:8,n3:2};
const Num=createContext();
export default function Const(){
    return(
        <Num.Provider value={obj}>
            <Const1/>
        </Num.Provider>
    )
}
export {Num};