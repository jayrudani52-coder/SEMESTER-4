import img1 from "./assets/hero.png"
import "./Myapp.css";
function Comp1(){
    var n="ABC";
    var c={color:"red",fontSize:"30px"};
    return(
        <>
        <h1 style={{color:"blue",fontSize:"50px",textTransform:"uppercase"}}>
            Hi {n}</h1>
        <h2 style={c}>Hello</h2>
        <img src={img1} className="i1"></img>
        <img src="/favicon.svg" className="i1"></img>
        <input type="email"></input>
        {/* heyyyy */}
        {//Helll mannn
        }
        </>
    )
}
export default Comp1;