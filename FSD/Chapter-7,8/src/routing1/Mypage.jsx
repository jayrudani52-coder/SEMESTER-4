import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import React from "react";
import Myhome from "./Myhome";
import Mystudent  from "./Mystudent";
import Mynopage  from "./Mynopage";
import s1 from "../assets/hero.png";
export default function Mypage(){
    const students=[{rollno:1,name:"ABC",photo:s1,marks:85},
                    {rollno:2,name:"PQR",photo:s1,marks:95},
                    {rollno:3,name:"XYZ",photo:s1,marks:75}]
    return(
        <>
        <Router>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/students">Students</Link></li>
            </ul>
            <Routes>
                <Route path="/" element={<Myhome/>}/>
                <Route path="/students" element={<Mystudent data={students}/>}/>
                <Route path="*" element={<Mynopage/>}/>
            </Routes>
        </Router>
        </>
    )
}