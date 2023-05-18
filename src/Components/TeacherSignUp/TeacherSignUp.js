import React, {useContext} from 'react'
import { Fragment, useState } from 'react';
import "../../common styles/Login.css";
import {createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import { auth} from '../../config/firebase'
import { AuthContext } from '../../Context/Context';
import {useNavigate } from 'react-router-dom';
import AlertBox from '../AlertBox/AlertBox';
import { ClipLoader } from 'react-spinners';
import {Link} from "react-router-dom"
import { getDoc,doc } from 'firebase/firestore';
import db from '../../config/firebase'

function TeacherSignUp() {
  const [email, setEmail]=useState("")
  const [regNo, setRegNo]=useState("")
  const [secretCode, setSecretCode]=useState("")
  const [load,setLoad]=useState({submit:false})
  const [password, setPassword]=useState("")
  const navigate=useNavigate()
  const {user,setUser}=useContext(AuthContext)
  const [alertPopup,setAlertPopup]=useState({status:false, message:"",icon:'circle-exclamation'})
  
  const handleSubmit=async(e)=>{
    e.preventDefault();
    setLoad({...load,submit:true})
    try{
        await getDoc(doc(db,'teachers', regNo))
        .then((snapShot)=>{
        if(snapShot.data().email===email && snapShot.data().secretCode==secretCode){
            createUserWithEmailAndPassword(auth, email, password)
            .then(async(userCredential) => {
                const user = userCredential.user;
                await updateProfile(user, {'displayName': snapShot.data().name})
                .then(()=>{
                    setAlertPopup({...alertPopup,message:"SuccessFully Registered",status:true,icon:"circle-check"})
                })
            }).catch((error)=>{
                setAlertPopup({...alertPopup,message:"Sign Up failed "+error.message,status:true,icon:"circle-xmark"})
                setLoad({...load,submit:false})
            })
        }
        else{
          setAlertPopup({...alertPopup,message:"Sign Up failed ",status:true,icon:"circle-xmark"})
          setLoad({...load,submit:false})
        }
    })
    }catch(error){
          alert(error.message)
          setLoad({...load,submit:false})
    }
  }
    
    // try{
    //   await signInWithEmailAndPassword(auth, email, password).then((userCredential)=>{
    //     setUser(userCredential.user)
    //     if(userCredential.user.uid!=AdminId){
    //       setAlertPopup({...alertPopup,message:"Login SuccessFull",status:true,icon:"circle-check"})
    //     }
    //     else{
    //       setAlertPopup({...alertPopup,message:"Login Failed.",status:true,icon:"circle-xmark"})
    //     }
    //     setLoad({...load,submit:false})
    //   }).catch((error)=>{
    //     if(error.message=="Firebase: Error (auth/invalid-email)."){
    //       setAlertPopup({...alertPopup,message:"Login Failed. Invalid Email or Password",status:true,icon:"circle-xmark"})
    //     }
    //     else{
    //       setAlertPopup({...alertPopup,message:"Login Failed "+error.message,status:true,icon:"circle-xmark"})
    //     }
    //       setLoad({...load,submit:false})
    //   })    
    // }catch(error){
    //   console.log(error.message)
    //   setLoad({...load,submit:false})
    // }
  
  return ( 
    <Fragment>
  <div className='row admin-login Login' style={{marginTop:"250px"}}>
        <h3 className="login-main-header">Sign Up Into Internal Mark Uploader</h3>
        <div className="form-container login">
        <form>
        <div className="mb-3"><h4 className="container-header"><span>Sign Up</span></h4></div>
        <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder='Enter Your Email' id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
                  <label className="form-label">Register No</label>
                  <input type="email" value={regNo} onChange={(e)=>setRegNo(e.target.value.toUpperCase())} className="form-control" placeholder='Enter Your Email' id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
                  <label className="form-label">Secret Code</label>
                  <input type="text" value={secretCode} onChange={(e)=>setSecretCode(e.target.value)} className="form-control" placeholder='Enter Secret Code' id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Your Password' className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3">
            <button className="login-btn"
             disabled={email==="" || regNo==="" || secretCode==="" || password===""}
             onClick={handleSubmit}>{load.submit ?<ClipLoader size="25" color="white"/>: "Register"}</button>  
        </div>    
          </form>
    </div>
    <Link to="/teacher/login" className='links'><div className="login-another"><span>Aleardy Have Account? Sign In</span></div></Link>
    {alertPopup.status && 
    <AlertBox 
    message={alertPopup.message} 
    setPopup={()=>{
      setAlertPopup({...alertPopup,status:false})
      navigate('/teacher')
    }}
    icon={alertPopup.icon} />
    }
  </div>
  </Fragment>
  )
}

export default TeacherSignUp