import React, {useEffect} from 'react'
import "./InternalDisplay.css"
import { useLocation } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore';
import db from "../../config/firebase"
import { useState } from 'react/cjs/react.development';
import {ClipLoader} from 'react-spinners'
import { Fragment } from 'react/cjs/react.production.min';
import { faHourglass1 } from '@fortawesome/free-solid-svg-icons';

function InternalDisplay() {
const loaction =useLocation();
const {regNo, sem}=loaction.state
const [stDoc, setStDoc]=useState([])
const [name, setName]=useState('')
const [load, setLoad]=useState(true)
const [docExist, setDocExist]=useState(false)
useEffect(async()=>{
    const docSnap = await getDoc(doc(db, 'student', regNo));
    if (docSnap.exists()) {
        setDocExist(true)
        setLoad(false)
        setStDoc(docSnap.data().mark[`sem${sem.value}`])
        setName(docSnap.data().name)
        
      } else {
        console.log("No such document!");
        setDocExist(false)
        setLoad(false)
      }
})
  return(

   <div className='row InternalDisplay'>
        <div className="col-md-12 text"><h5>Student Details</h5></div>
        <div className="col-md-12">
            <table className='st-details'>
                <tr>
                    <th>Register No</th>
                    <td>{regNo && regNo}</td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>{name}</td>
                </tr>
                <tr>
                    <th>Sem</th>
                    <td>{sem && sem.value}</td>
                </tr>
            </table>
        </div>
         <div className="col-md-12 text"><h5>Internal Marks</h5></div>
         {!load ?<div className="col-md-12">
            <table className='mrk-details'>
                <tr className='tableFirstRow'>
                    <th>Subject</th>
                    <th>Uploaded By</th>
                    <th>Attendance</th>
                    <th>Assignment</th>
                    <th>Exam</th>
                    <th>Seminar</th>
                    <th>Total</th>
                </tr>
                
                   { stDoc ? stDoc.map((obj,index)=>{
                            return <tr key={index}>
                            <td>{obj.name}</td>
                            <td>name</td>
                                <td>{obj.a}</td>
                                <td>{obj.b}</td>
                                <td>{obj.c}</td>
                                <td>{obj.d}</td>
                                <td>{obj.t}</td>
                            </tr>
                    }) : <td colspan="7">not uploaded</td>}
            </table>
        </div> : <td colspan="7"><ClipLoader></ClipLoader></td> } 
    </div>
  )
}

export default InternalDisplay