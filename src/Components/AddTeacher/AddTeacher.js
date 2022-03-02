import db from "../../config/firebase"
import { setDoc, doc } from "firebase/firestore"
import { useNavigate} from "react-router-dom";
import React, {Fragment, useState, useContext, useEffect} from 'react'
import "../../common styles/containerStyles.css"

function AddTeacher() {
  const navigate = useNavigate();
  const [name, setName]=useState("");
  const [regNo, setRegNo]=useState("");
  const [email, setEmail]=useState("");
  
  const[btn, setBtn]=useState(false)

  // const db=firebase.firestore()
  // const teacherDoc= doc(db,'teachers', 'JycrNY68TPjECd7Z4UNr')
  // setDoc(teacherDoc, {name:'fasil'}, {merge:true})

     

  async function  handleSubmit(e){
    e.preventDefault();
    await setDoc(doc(db, "teachers", regNo), {
      name,
      regNo,
      email
    }).then(()=>{
      console.log("uploaded");
      navigate('/admin/teacher')
    })
  }

  return (
      <Fragment>
    <div className="text">Add Teacher</div>
    <div className="main">
    <div className="form-container">
        <form onSubmit={handleSubmit}>
            <div className="mb-3"><h4 className="container-header">Add Teacher Details</h4></div>
            <div className="mb-3">
              <label for="name" className="form-label">Teacher Name</label>
              <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} id="name" placeholder='Enter Student Name' />
            </div>
            <div className="mb-3">
              <label for="reg" className="form-label">Register No</label>
              <input type="text" className="form-control" value={regNo} onChange={(e)=>{
                setRegNo(e.target.value.toUpperCase())

              }} id="reg" placeholder='Enter Register No' />
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">Email</label>
              <input type="email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}} id="email" placeholder='Enter Email Id' />
            </div>
          
            <div className="btn">
                <button type="reset" className="btn btn-danger">reset</button>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
    </div>
</div>
</Fragment>
  )
}

export default AddTeacher