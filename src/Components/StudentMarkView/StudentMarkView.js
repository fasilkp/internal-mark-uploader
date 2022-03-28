import React,{useState, useEffect} from 'react'
import db from "../../config/firebase"
import {collection, query, where, getDocs,setDoc,doc} from 'firebase/firestore'
import "../UploadMark/UploadMark.css"
import { useLocation, useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'

function StudentMarkView() {
    const location =useLocation();
    const {sem, subject,course,year}=location.state;
    const [students, setStudents]=useState([])
    const studentRef=collection(db, "student")
    useEffect(async()=>{
        let q =await query(studentRef, where("courseId", "==", course));
        q = await query(q, where("year", "==", year));
        await getDocs(q).then((querySnapshot)=>{
        setStudents(querySnapshot.docs);
        });
      },[])
  return (
    <div className="main row uploadMark">
        <div className="head"><div><h5>Subject Details</h5></div></div>
        <div className="table">
        <table className='stDetails'>
            <tbody>
                <tr className='tableFirstRow'>
                    <th>Subject</th>
                    <th>Year</th>
                    <th>Sem</th> 
                    <th>Course</th> 
                </tr>
                <tr >
                    <td>{subject}</td>
                    <td >{year}</td>
                    <td >Semester {sem}</td> 
                    <td >{course}</td> 
                </tr>
            </tbody>
        </table>
        
        </div>
        <div className="head"><div><h5>Enter Internal Marks</h5></div></div>
        <div className="table">
            <table>
            <tbody>
                <tr className='tableFirstRow'>
                    <th>Register No</th>
                    <th>Name</th>
                    <th>Assignment</th>
                    <th>Attendance</th>
                    <th>Exam</th>
                    <th>Seminar</th>
                    <th>Total</th>
                </tr>
                {
                    students.map((obj, index)=>{
                        return <tr key={index}>
                            <td>{obj.data().regNo}</td>
                            <td>{obj.data().name}</td>
                            <td>{obj.data().mark.hasOwnProperty('sem'+sem).assignment ?
                             obj.data().mark['sem'+sem][subject].assignment : "N/A"}</td>
                            <td>{obj.data().mark.hasOwnProperty('sem'+sem).attendance ?
                             obj.data().mark['sem'+sem][subject].attendance : "N/A"}</td>
                            <td>{obj.data().mark.hasOwnProperty('sem'+sem).exam ?
                             obj.data().mark['sem'+sem][subject].exam : "N/A"}</td>
                            <td>{obj.data().mark.hasOwnProperty('sem'+sem).seminar ?
                             obj.data().mark['sem'+sem][subject].seminar : "N/A"}</td>
                            <td>{obj.data().mark.hasOwnProperty('sem'+sem).total ?
                             obj.data().mark['sem'+sem][subject].total : "N/A"}</td>
                        </tr> 
                    })
                }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default StudentMarkView