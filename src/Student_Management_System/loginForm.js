import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
    let navigate = useNavigate()
    const [email, setEmail] = useState("")
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const [pass, setPass] = useState("")
    const changePass = (e) => {
        setPass(e.target.value)
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
        let obj = {
            email: email,
            password: pass
        }
        signInWithEmailAndPassword(auth, obj.email, obj.password)
            .then(() => {
                alert("Loggedin successfully!")
                navigate("/sms", { state: { email: email } })
            })
            .catch((err) => {
                console.log("Error:", err)
            })
    }

    return (

        <div className="main">
            <div className="container-sm d-flex justify-content-center align-items-center vh-100">
                <div className="card  m-3 p-3" style={{ background: "rgba(13,0,88,0.63", color: "whitesmoke" }}>
                    <div className="card-title text-center">
                        <h3>LOGIN FORM</h3>
                    </div>
                    <div className="card-body">

                        <form onSubmit={submitData}>

                            <div className="mb-3">
                                <label className="form-label">
                                    <i className="fa-solid fa-envelope"></i>
                                    <span className="mx-3">Email</span>
                                </label>
                                <input type="email" id="exampleInputEmail1" className="form-control" value={email} onChange={changeEmail} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">
                                    <i className="fa-solid fa-key"></i>
                                    <span className="mx-3">Password</span>
                                </label>
                                <input type="password" id="pass" className="form-control" value={pass} onChange={changePass} />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary mx-3">Submit</button>
                                <a href="/sms" className="btn btn-danger">Back</a>
                            </div><br />
                            <div>
                                <b>If you do not have an account? </b>
                                <a href="/">REGISTER HERE</a>
                            </div>
                        </form>



                    </div>
                </div>



            </div>
        </div>
    )
}
export default Login