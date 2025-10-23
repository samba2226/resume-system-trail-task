import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
let URL = "http://localhost:3001/employee/"
function Edit() {
    let navigate = useNavigate()
    const { empid } = useParams()
    const[id,setid]=useState("")
    // const changeId=(e)=>{
    //     setid(e.target.value)
    // }
    const [name, setName] = useState("")

    const changeName = (e) => {
        setName(e.target.value)
}
    const [email, setEmail] = useState("")
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const [mobile, setMobile] = useState("")
    const changeMobile = (e) => {
        setMobile(e.target.value)
    }
    const [roll, setRoll] = useState("")
    const changeRoll = (e) => {
        setRoll(e.target.value)
    }
    const [per, setPer] = useState("")
    const changePer = (e) => {
        setPer(e.target.value)
    }
    const [city, setCity] = useState("")
    const changeCity = (e) => {
        setCity(e.target.value)
    }
    const [state, setState] = useState("")
    const changeState = (e) => {
        setState(e.target.value)
    }
   
    useEffect(() => {
        fetch(URL + empid, { method: 'GET' })
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                setid(resp.id)
                   setName(resp.name)
                setEmail(resp.email)  
                setMobile(resp.mobile) 
                setRoll(resp.roll)
                setPer(resp.percentage)
                setCity(resp.city)
                setState(resp.state)
            })
            .catch((err) => {
                console.log("Error", err)
            })
    }, [empid])

    const editData = (e) => {
        e.preventDefault()
         let data = { 
            id,
            name, 
            email, 
            mobile, 
            roll, 
            percentage: per, 
            city, 
            state 
        };

        fetch(URL + empid, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(() => {
                alert("Posted successfully")
                navigate("/sms")
            })
            .catch((err) => {
                console.log("Error:", err)
            })
    }
    return (
         <div  style={{
    width: "100%",
    backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSl5wvHLxtaQWs3YYuTsezJtEbhCHcqsFcng&s")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
            <div className="container " style={{maxWidth:"650px"}}>
                <div className="card  p-3" style={{background:"rgba(51,51,51,0.855)",color:"white",fontSize:"20px"}}>
                    <div className="card-title text-center">
                        <h1>STUDENT FORM</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={editData}>

                            <div className="mb-3">
                                <label className="form-label">ID</label>
                                <input type="text" className="form-control" id="id" disabled  required style={{backgroundColor:"rgba(116,112,112,0.55",color:"white"}} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">
                                    <i className="fa-solid fa-user" aria-hidden="true"></i>
                                    <span className="mx-3">Name</span></label>
                                <input type="text" className="form-control" required style={{backgroundColor:"rgba(116,112,112,0.55",color:"white"}} id="name" value={name} onChange={changeName} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                                    <span className="mx-3">Email</span></label>
                                <input type="email" id="email" required style={{backgroundColor:"rgba(116,112,112,0.55",color:"white"}} className="form-control" value={email} onChange={changeEmail} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    <i className="fa-solid fa-phone" aria-hidden="true"></i>
                                    <span className="mx-3">Mobile</span></label>
                                <input type="number" required style={{backgroundColor:"rgba(116,112,112,0.55",color:"white"}} className="form-control" id="mobile" value={mobile} onChange={changeMobile} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    <i className="fa-solid fa-registered" aria-hidden="true"></i>
                                    <span className="mx-3">Roll Number</span></label>
                                <input type="number" required style={{backgroundColor:"rgba(116,112,112,0.55",color:"white"}} className="form-control" id="roll" value={roll} onChange={changeRoll} />

                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    <i className="fa-solid fa-registered" aria-hidden="true"></i>
                                    <span className="mx-3">Roll Number</span></label>
                                <input type="number" required style={{backgroundColor:"rgba(116,112,112,0.55",color:"white"}} id="per" className="form-control" value={per} onChange={changePer} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    <i className="fa-solid fa-city" aria-hidden="true"></i>
                                    <span className="mx-3">City</span></label>
                                <input type="text" required style={{backgroundColor:"rgba(116,112,112,0.55",color:"white"}} className="form-control" id="city" value={city} onChange={changeCity} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    <i className="fa-solid fa-flag" aria-hidden="true"></i>
                                    <span className="mx-3">state</span></label>
                                <input type="text" required style={{backgroundColor:"rgba(116,112,112,0.55",color:"white"}} className="form-control" id="state" value={state} onChange={changeState} />
                            </div>


                            <div className="text-center">
                                <button type="submit" className="btn btn-primary mx-3">Submit</button>
                                <a href="/sms" className="btn btn-danger">Back</a>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Edit