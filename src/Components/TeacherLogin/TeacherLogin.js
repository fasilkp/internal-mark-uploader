import React, {useContext,useEffect} from 'react'
import { Fragment, useState } from 'react';
import "../../common styles/Login.css";
import {signInWithEmailAndPassword} from 'firebase/auth'
import {AdminId, auth} from '../../config/firebase'
import { AuthContext } from '../../Context/Context';
import {useNavigate } from 'react-router-dom';
import AlertBox from '../AlertBox/AlertBox';
import { ClipLoader } from 'react-spinners';
import {Link} from "react-router-dom"

function TeacherLogin() {
  const [email, setEmail]=useState("")
  const [load,setLoad]=useState({submit:false})
  const [password, setPassword]=useState("")
  const navigate=useNavigate()
  const {user,setUser}=useContext(AuthContext)
  const [alertPopup,setAlertPopup]=useState({status:false, message:"",icon:'circle-exclamation'})
  useEffect(()=>{
    if(user && user.uid!=AdminId)
        navigate('/teacher') 

  },[user])
  const demoLogin=(e)=>{
    e.preventDefault()
    setEmail('teacher@gmail.com')
    setPassword('123456')
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    setLoad({...load,submit:true})
    try{
      await signInWithEmailAndPassword(auth, email, password).then((userCredential)=>{
        setUser(userCredential.user)
        if(userCredential.user.uid!=AdminId){
          setAlertPopup({...alertPopup,message:"Login SuccessFull",status:true,icon:"circle-check"})
        }
        else{
          setAlertPopup({...alertPopup,message:"Login Failed.",status:true,icon:"circle-xmark"})
        }
        setLoad({...load,submit:false})
      }).catch((error)=>{
        if(error.message=="Firebase: Error (auth/invalid-email)."){
          setAlertPopup({...alertPopup,message:"Login Failed. Invalid Email or Password",status:true,icon:"circle-xmark"})
        }
        else{
          setAlertPopup({...alertPopup,message:"Login Failed "+error.message,status:true,icon:"circle-xmark"})
        }
          setLoad({...load,submit:false})
      })    
    }catch(error){
      console.log(error.message)
      setLoad({...load,submit:false})
    }
  }
  return ( 
    <Fragment>
  <div className='row admin-login Login' style={{marginTop:"160px"}}>
        <h3 className="login-main-header">Login into Internal Mark Uploader</h3>
        <div className="form-container login">
        <form>
        <div className="mb-3"><h4 className="container-header"><span>Login</span></h4></div>
        <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder='Enter Your Email' id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Your Password' className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3">
            <button className="login-btn"
            disabled={email==="" || password===""}
            onClick={handleSubmit}>{load.submit ?<ClipLoader size="25" color="white"/>: "Login"}</button>  
        </div>    
        <button className="btn btn-outline-dark w-100 mt-2 d-flex justify-content-center" onClick={demoLogin} >Demo input</button>

          </form>
    </div>
    <Link to="/teacher/signup" className='links'><div className="login-another"><span>Don't Have Acoount ? Register</span></div></Link>
    <Link to="/" className='links'><div className="login-another"><span>Login as Student</span></div></Link>
    {alertPopup.status && 
    <AlertBox 
    message={alertPopup.message} 
    setPopup={()=>{
      setAlertPopup({...alertPopup,status:false})
    }}
    icon={alertPopup.icon} />
    }
  </div>
  </Fragment>
  )
}

export default TeacherLogin