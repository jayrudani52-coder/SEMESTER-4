import Child from "./Child.jsx";
import Child1 from "./Child1.jsx";
function Parent(){
    var n="ABC";
    var obj={name:"Test",clg:"LJ University"};
    return(
        <>
            <Child surname={n} age="20"/>
            <Child surname="XYZ" age={23}/>
            <Child1 data={obj}/>
        </>
    )
}
export default Parent;