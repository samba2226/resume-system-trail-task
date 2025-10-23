import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

let URL = "http://localhost:3001/employee"
function SMS() {
    let navigate = useNavigate()
    const [data, setData] = useState("")
    let location = useLocation()
    let email = location.state?.email || "GUEST"
    useEffect(() => {
        fetch(URL, { method: 'GET' })
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                setData(resp)
            })
            .catch((err) => {
                console.log("Error:", err)
            })
    }, [])
    // Delete functionallity
    const deleteData = (id) => {
        fetch("http://localhost:3001/employee/" + id, { method: 'DELETE' })
            .then(() => {
                alert("Deleted Successfully!")
            })
            .catch((err) => {
                console.log("Error:", err)
            })

    }
    //search functionallity
    const [value, setValue] = useState("")
    const changeValue = (e) => {
        setValue(e.target.value)
    }
    useEffect(() => {

        fetch(`http://localhost:3001/employee?q=${value}`, { method: 'GET' })
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                setData(resp)
            })
            .catch((err) => {
                console.log("Error:", err)
            })
    }, [value])
    // sorting functionality

    const [sort, setSort] = useState("")
    let opt = ['id',
        'name',
        'mobile',
        'email',
        'roll',
        'percentage',
        'city',
        'state']

    const sortData = (e) => {
        e.preventDefault()
        let value = e.target.value
        setSort(value)
        fetch(`http://localhost:3001/employee?_sort=${value}&_order=asc`, { method: 'GET' })
            .then((res) => {
                return res.json()
            }).then((resp) => {
                setData(resp)
            })
            .catch((err) => {
                console.log("Error:", err)
            })
    }
    const editData = (id) => {
        navigate('/edit/' + id)
    }
 
    const logout = () => {
        navigate('/')
    }

    return (
        <div >
            <div>
                <div className="border border-black py-4 my-4 mx-3">
                    <h1 className="title text-center">
                        STUDENT MANAGEMENT SYSTEM</h1>

        <nav className="navbar navbar-expand-lg">
             <div className="container-fluid">
                        <a className="btn btn-success px-2 me-3" href="/update" >ADD NEW(+)</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                  <select className="form-select m-2 me-3" style={{width:"250px"}} value={sort} onChange={sortData}>
                            <option>SORT</option>
                            {opt.map((item) => (
                                <option>{item}</option>
                            ))}
                        </select>
                          <input className="form-control me-4" type="text"  placeholder="Search Filter......" value={value} onChange={changeValue} />
                        {/* <div><label for="toggle">{email}▼</label>
                            <input type="checkbox" id="toggle"></input>
                            <ul  className="dropdown-menu">
                                <li> <a className="btn btn-light px-2 mx-2" href="/login">SignIn/ SingUp</a></li>
                            </ul>
                        </div> */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/button" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-solid fa-user" aria-hidden="true"><b className="mx-3">{email}</b> </i>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="btn btn-light px-2 mx-2" href="/login">SignIn/ SingUp</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        
                            <button onClick={logout}  className="btn btn-outline-success" id="button1">LOGOUT</button>
                        
                            </div>
                      
                      

                    </div>
        </nav>
                   <div className="table-responsive mx-2">
                                 <table className="table table-bordered">
                                    <thead>
                                         <tr className="text-center">
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>MOBILE</th>
                            <th>ROLL NUMBER</th>
                            <th>PERCENTAGE</th>
                            <th>CITY</th>
                            <th>STATE</th>
                            <th>ACTIONS</th>
                        </tr>
                                    </thead>
                       
                        {data && data.map((item) => (
                            <tbody>
                                 <tr className="text-center">
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                <td>{item.roll}</td>
                                <td>{item.percentage}</td>
                                <td>{item.city}</td>
                                <td>{item.state}</td>
                                <td>
                                    <div>
                                        <button className="btn btn-primary mx-2 mx-1" onClick={() => { editData(item.id) }}>Edit</button>
                                        <button className="btn btn-danger" onClick={() => { deleteData(item.id) }}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        ))}
                    </table>
                   </div>
                   
                </div>

            </div>
        </div>
    )
}
export default SMS