import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Shome from "./Shome";
import Sproject from "./Sproject";
import Snopage from "./Snopage";
import img1 from "../assets/hero.png";
function Student(){
    const s=[{name:"project1",desc:"Lorem Ipsum",image:img1}]
    return(
        <div>
            <Router>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
                <Routes>
                    <Route path="/" element={<Shome/>}/>
                    <Route path="/projects" element={<Sproject data={s}/>}/>
                    <Route path="/nopage" element={<Snopage/>}/>
                </Routes>
            </Router>
        </div>
    )
}
export default Student;