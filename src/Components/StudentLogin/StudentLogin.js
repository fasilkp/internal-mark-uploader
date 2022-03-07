import React, {useState} from 'react';
import { Fragment } from 'react/cjs/react.development';
import {Link} from 'react-router-dom'
import "../../common styles/Login.css"
function StudentLogin() {

const [regNo, setRegNo]=useState("")
const [sem, setSem]=useState({value:1, name:"sem1"})

  return (
    <Fragment>
    <div className='row admin-login'>

        <div className="form-container login">
        <form>
        <div className="mb-3"><h4 className="container-header"><span>Login</span></h4></div>
        <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Register No</label>
                  <input type="text" value={regNo} onChange={(e)=>setRegNo(e.target.value.toUpperCase())} class="form-control" placeholder='Enter Your Reg No' id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Sem</label>
                <select className="form-select" value={sem.value} onChange={(e)=>setSem({value:e.target.value, name:`sem${e.target.value}`})} aria-label="Default select example">
                <option value="1">First Semester</option>
                <option value="2">Second Semester</option>
                <option value="3">Third Semester</option>
                <option value="4">Fourth Semester</option>
                <option value="5">Fifth Semester</option>
                <option value="6">Sixth Semester</option>
                </select>
            </div>
        <div class="mb-3">
            <Link to="/student/display-mark" className='links' state={{regNo, sem}}><button className="login-btn">Login</button></Link>
        </div>    
          </form>
    </div>
    <Link to="teacher/login" className='links'><div className="login-another"><span>Login as teacher</span></div></Link>
    </div>
    </Fragment>
  )
}

export default StudentLogin