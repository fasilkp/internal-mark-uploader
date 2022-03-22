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
const location =useLocation();
const {regNo, sem}=location.state
const [stDoc, setStDoc]=useState([])
const [name, setName]=useState('')
const [load, setLoad]=useState(true)
const [docExist, setDocExist]=useState(false)
useEffect(async()=>{
    const docSnap = await getDoc(doc(db, 'student', regNo));
    setName(docSnap.data().name)
    if (docSnap.data().mark['sem'+sem.value]) {
        console.log('sem'+sem.value);
        console.log(docSnap.data().mark['sem'+sem.value]);
        setStDoc(docSnap.data().mark['sem'+sem.value])
      } else {
        console.log("No such document!");
      }
},[])
  return(
//   <div>
//       <h1>hello</h1>
//       <h1>hello</h1>
//       <h1>hello</h1>
//       <h1>hello</h1>
//       <h1 onClick={async ()=>{
//           console.log(stDoc);
//           console.log(sem.value, sem.name);
//           const docSnap = await getDoc(doc(db, 'student', regNo));
//           console.log(docSnap);
//           console.log(stDoc);
//           }}>hello</h1>
//         {
//             stDoc[0] ? stDoc.map((obj)=>{
//                 return <h1>
//                     <pre>{obj.subName}</pre>
//                     <pre>{obj.subCode}</pre>
//                     <pre>{obj.total}</pre>
//                     </h1>
//             }) : "no such document"
//         }
//   </div>

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
         <div className="col-md-12">
            <table className='mrk-details'>
                <tr className='tableFirstRow'>
                    <th>Subject</th>
                    <th>Code</th>
                    <th>Uploaded By</th>
                    <th>Attendance</th>
                    <th>Assignment</th>
                    <th>Exam</th>
                    <th>Seminar</th>
                    <th>Total</th>
                </tr>
                
                   { stDoc[0]  ? stDoc.map((obj,index)=>{
                            return <tr key={index}>
                            <td>{obj.subName}</td>
                            <td>{obj.subCode}</td>
                            <td>name</td>
                                <td>{obj.assignment}</td>
                                <td>{obj.attendance}</td>
                                <td>{obj.seminar}</td>
                                <td>{obj.exam}</td>
                                <td>{obj.total}</td>
                            </tr>
                    }) : <td colspan="7">not uploaded</td>}
            </table>
        </div>
    </div>
  )
}

export default InternalDisplay