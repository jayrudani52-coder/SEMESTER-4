import { useState } from "react";
function Us5(){
    const [task,settask]=useState("");
    const[todolist,settodolist]=useState([]);
    const addtask=()=>{
        settodolist([...todolist,{id:Date.now(),name:task}]);
        settask(" ");
    }
    const deletetask=(id)=>{
        settodolist(todolist.filter((task)=>task.id!==id));
    }
    return(
        <>
        <input type="text" value={task} onChange={(e)=>settask(e.target.value)}/>
        <button onClick={addtask}>ADD</button>
        {
            todolist.map((t)=>
            <div key={t.id}>
                <h2>{t.name}</h2>
                <button onClick={()=>deletetask(t.id)}>DELETE</button>
            </div>
            )
        }
        </>
    )
}
export default Us5;