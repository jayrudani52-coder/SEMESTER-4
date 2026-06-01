import { useState } from "react";
function Form1(){
    const [formdata,setformdata]=useState({});
    return(
        <>
        <form onSubmit={handlesubmit}>
            <label>First Name :</label>
            <input type="text" name="fname" onChange={handlechange}/><br/>
            <label>Email :</label>
            <input type="email" name="eid" onChange={handlechange}/><br/>
            <label>Password :</label>
            <input type="password" name="pass" onChange={handlechange}/><br/>
            <label>Confirm Password :</label>
            <input type="password" name="cpass" onChange={handlechange}/><br/>
            <label>Message :</label>
            <textarea name="msg" value="ABC" onChange={handlechange}></textarea><br/>
            <label>Gender :</label>
            <input type="radio" name="gender" value="male" onchange={handlechange}/>Male
            <input type="radio" name="gender" value="female" onchange={handlechange}/>Female
            <br/>
            <label>Select City :</label>
            <select name="city" onchangw={handlechange}>
                <option value="Ahm">Ahmedabad</option>
                <option value="Raj">Rajkot</option>
                <option value="Aml">Amreli</option>
            </select>
            <br/>
            <input type="submit"/>
        </form>
        </>
    )
    function handlechange(){
        const {name,value}=e.target;
        setformdata({...formdata,[name]:value})
    }
    function handlesubmit(e){
        e.presentDefault();
        alert(`Thank You! \n Firstname : ${formdata.fname}`);
    }
}
export default Form1;