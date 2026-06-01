import {useContext} from "react";
import {Num} from "./Const";
function Const2(){
    var n=useContext(Num);
    return(
        <h1 style={{color:"red"}}>
            Output : {n.n1 * n.n2 / n.n3}
        </h1>
    )
}
export default Const2;