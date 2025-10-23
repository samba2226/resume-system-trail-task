import { initializeApp } from "firebase/app"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Register() {
    let navigate = useNavigate()
    const [name, setName] = useState("")
    const changeName = (e) => {
        setName(e.target.value)
    }
    const [email, setEmail] = useState("")
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const [pass1, setPass1] = useState("")
    const changePass1 = (e) => {
        setPass1(e.target.value)
    }
    const [pass2, setPass2] = useState("")
    const changePass2 = (e) => {
        setPass2(e.target.value)
    }
    const firebaseConfig = {
        apiKey: "AIzaSyBZqTxlJMkliXXTYRiFhf8ViuwsisOdg8Q",
        authDomain: "besant-b01ed.firebaseapp.com",
        projectId: "besant-b01ed",
        storageBucket: "besant-b01ed.firebasestorage.app",
        messagingSenderId: "96584000547",
        appId: "1:96584000547:web:a2a5cfb6f419348fa03d96",
        measurementId: "G-TFT642M9JN"
    };

    // Initialize Firebase
    // const app =
     initializeApp(firebaseConfig);
    const auth = getAuth();
    const submitData = (e) => {
        e.preventDefault()
        if (name.length < 5) {
            alert("Name should contains more the five characters")
        }
        else if (pass1 !== pass2) {
            alert("Password Does Not matched")
        }
        else {
            alert("Form is successfully submitted")
            navigate("/login")

        }
        let obj = {
            email: email,
            password: pass1
        }
        createUserWithEmailAndPassword(auth, obj.email, obj.password)
            .then(() => {
                alert("Registered successfully!")
            })
            .catch((err) => {
                console.log("Error:", err)
            })
    }

    return (
        <div className="main">
            <div class="row">
                <div class="col">
                    <div className="container d-flex justify-content-center align-items-center vh-100" >
                        
                        <div className="card text-bg-secondary m-3 p-3">

                            <div className="card-title text-center">
                                <h3 >REGISTRATION FORM</h3>
                            </div>
                            <div className="card-body">

                                <form onSubmit={submitData}>
                                    <div className="mb-3">
                                        <label className="form-label">
                                            <i className="fa-solid fa-user" aria-hidden="true">
                                                
                                            </i>
                                            <span className="mx-3">Name</span>
                                        </label>
                                        <input type="text" id="name1" className="form-control" value={name} onChange={changeName} />
                                    </div>

                                    <div className="mb-3">
                                        <label  className="form-label">
                                            <i className="fa-solid fa-envelope"></i>
                                           <span className="mx-3">Email</span> 
                                        </label>
                                        <input type="email" id="exampleInputEmail1" className="form-control" value={email} onChange={changeEmail} />
                                    </div>
                                    <div className="mb-3">
                                        <label  className="form-label">
                                            <i className="fa-solid fa-key"></i>
                                           <span className="mx-3">Password</span> 
                                        </label>
                                        <input type="password" id="pass1" className="form-control" value={pass1} onChange={changePass1} />
                                    </div>
                                    <div className="mb-3">
                                        <label  className="form-label">
                                            <i className="fa-solid fa-lock"></i>
                                           <span className="mx-3">Confirm Password</span> 
                                        </label>
                                        <input type="password" id="pass21" className="form-control" value={pass2} onChange={changePass2} />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary mx-3">Submit</button>
                                        <a href="/sms" className="btn btn-danger">Back</a>
                                    </div><br/>
                                         <div >
                                    <b>If you already have accont? </b><a href="/login">LOGIN HERE</a>
                                </div>
                                </form>
                               
                                
                            </div>


                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Register