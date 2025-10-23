
import { BrowserRouter as Router,Route, Routes } from "react-router";
import Login from "./Student_Management_System/loginForm";
import Register from "./Student_Management_System/registerationForm";
import Update from "./Student_Management_System/updateServer";
import SMS from "./Student_Management_System/SMS";
import Edit from "./Student_Management_System/editForm";

function Apps(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Register/>} />
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/edit/:empid" element={<Edit/>} />
                    <Route path="/sms" element={<SMS/>} />
                    <Route path="/update" element={<Update/>} />
                </Routes>
            </Router>
        </div>
    )
}
export default Apps