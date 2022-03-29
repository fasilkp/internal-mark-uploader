import db from "../../config/firebase"
import { setDoc, doc } from "firebase/firestore"
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {Link, useNavigate} from "react-router-dom";
import React, {Fragment, useState, useContext, useEffect} from 'react'
import { ClipLoader } from "react-spinners";
import "../../common styles/containerStyles.css"

function AddTeacher() {
  const navigate = useNavigate();
  const [name, setName]=useState("");
  const [regNo, setRegNo]=useState("");
  const [email, setEmail]=useState("");
  const [submitLoader, setSubmitLoader]=useState(false)
  const [load, setLoad]=useState(false)
  
  const[btn, setBtn]=useState(false)

  async function  handleSubmit(e){
    setSubmitLoader(true)
    // createUserWithEmailAndPassword(auth, email, email+regNo)
    // .then(async(userCredential) => {
    // const user = userCredential.user;
    // await updateProfile(user, {
    //   'displayName': name
    // }).then(async()=>{
      
    // }) 
    await setDoc(doc(db, "teachers", regNo), {
      name,
      regNo,
      email
    }).then(()=>{
      alert("uploaded");
      navigate('/admin/teacher')
    }).catch((error) => {
    const errorCode = error.code;
    alert(error.message);
  });
  }
  useEffect(()=>{
    setLoad(false)
  },[])

  return (
      <Fragment>
    <div className="text">Add Teacher</div>
    {load && <div className="loader"><ClipLoader/></div>}
    <div className="main">
    <div className="form-container">
        <form onSubmit={(e)=>e.preventDefault()}>
            <div className="mb-3"><h4 className="container-header">Add Teacher Details</h4></div>
            <div className="mb-3">
              <label for="name" className="form-label">Teacher Name</label>
              <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value.toUpperCase())} id="name" placeholder='Enter Student Name' />
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
            <div className="mb-3">
              <Link to="/admin/teacher-details-upload">Upload Excel File</Link>
            </div>
            <div className="btn">
                <button type="reset" className="btn btn-danger">reset</button>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>{submitLoader?<ClipLoader size="25" color="white"/>: "Submit"}</button>
            </div>
            
          </form>
    </div>

</div>
</Fragment>
  )
}

export default AddTeacher