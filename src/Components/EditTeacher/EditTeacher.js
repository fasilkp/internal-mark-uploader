import React ,{useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Fragment } from 'react/cjs/react.development'
import "../../common styles/containerStyles.css"

import db from "../../config/firebase"
import {setDoc, doc, getDoc } from "firebase/firestore"
import { ClipLoader } from 'react-spinners'


function EditTeacher(props) {
  const location = useLocation();
  const { obj} = location.state
  const navigate=useNavigate();
  const [name, setName]=useState(obj.name);
  const [regNo, setRegNo]=useState(obj.regNo);
  const [email, setEmail]=useState(obj.email);
  const [submitLoader, setSubmitLoader]=useState(false)
  const [load, setLoad]=useState(true);
  useEffect(()=>{
      setLoad(false)
  }) 

  async function onHandleSubmit(e){
    setSubmitLoader(true)
    e.preventDefault();
    await setDoc(doc(db, "teachers", regNo), {
      name,
      regNo,
      email
    }).then(()=>{
      setSubmitLoader(false)
      navigate('/admin/teacher')
      alert("successfully edited")
    })
  }
  return (
      <Fragment>
    <div className="text">Edit Teacher</div>
    {load && <div className="loader"><ClipLoader/></div>}
    <div className="main">
    <div className="form-container">
        <form onSubmit={onHandleSubmit}>
            <div className="mb-3"><h4 className="container-header">Edit Teacher Details</h4></div>
            <div className="mb-3">
              <label for="name" className="form-label">Teacher Name</label>
              <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="form-control" id="name" placeholder='Enter Student Name' />
            </div>
            <div className="mb-3">
              <label for="reg" className="form-label">Register No</label>
              <input type="text" value={regNo} onChange={(e)=>{setRegNo(e.target.value.toUpperCase())}} className="form-control" id="reg" placeholder='Enter Register No' />
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">Email</label>
              <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="email" placeholder='Enter Email Id' />
            </div>
          
            <div className="btn">
                <button type="reset" className="btn btn-danger">reset</button>
                <button type="button" className="btn btn-primary" onClick={onHandleSubmit}>{submitLoader?<ClipLoader size="25" color="white"/>: "Submit"}</button>
            </div>
          </form>
    </div>
</div>
</Fragment>
  )
}

export default EditTeacher