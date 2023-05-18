import React, {useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore';
import db from "../../config/firebase"
import "../UploadMark/UploadMark.css"

function InternalDisplay() {
const location =useLocation();
const {regNo, sem}=location.state
const [stDoc, setStDoc]=useState({})
const [name, setName]=useState('')
const [load, setLoad]=useState(true)
const [docExist, setDocExist]=useState(false)
useEffect(async()=>{
    const docSnap = await getDoc(doc(db, 'student', regNo));
    setName(docSnap.data().name)
    try{
        if (docSnap.data().mark['sem'+sem.value]) {
            setStDoc(docSnap.data().mark['sem'+sem.value])
          } else {
            console.log("No such document!");
          }
    }catch(error){
        if(error.message==="Cannot read properties of undefined (reading 'sem1')"){
            alert("Not Uploaded")
        }  
    }
},[])
  return(
    <div className="main row uploadMark">
    <div className="head"><div><h5>Subject Details</h5></div></div>
    <div className="table">
    <table className='stDetails'>
        <tbody>
            <tr className='tableFirstRow'>
                <th>Register No</th>
                <th>Name</th>
                <th>Semester</th> 
            </tr>
            <tr >
                <td>{regNo && regNo}</td>
                <td >{name && name}</td>
                <td >{sem && sem.value}</td> 
            </tr>
        </tbody>
    </table>
    
    </div>
    <div className="head"><div><h5>Enter Internal Marks</h5></div></div>
    <div className="table">
        <table>
        <tbody>
            <tr className='tableFirstRow'>
                <th>SubName</th>
                <th>Uploaded By</th>
                <th>Assignment</th>
                <th>Attendance</th>
                <th>Exam</th>
                <th>Seminar</th>
                <th>Total</th>
            </tr>
            { Object.values(stDoc).map((obj,index)=>{
                            return <tr key={index}>
                            <td style={{maxWidth:"100px"}}>{obj.subName}</td>
                            <td>{obj.uploadedBy && obj.uploadedBy}</td>
                            <td>{obj.assignment}</td>
                            <td>{obj.attendance}</td>
                            <td>{obj.seminar}</td>
                            <td>{obj.exam}</td>
                            <td>{obj.total}</td>
                            </tr>
                    })}
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default InternalDisplay