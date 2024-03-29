import React,{useState, useEffect,useContext} from 'react'
import db from "../../config/firebase"
import {AuthContext} from "../../Context/Context"
import {collection, query, where, getDocs,setDoc,doc,getDoc} from 'firebase/firestore'
import "./UploadMark.css"
import { useLocation, useNavigate } from 'react-router-dom'
import { replaceSpecialCharecters } from '../../commonFunctions/idGenerate'
import { ClipLoader } from 'react-spinners'

function UploadMark() {
const {user}=useContext(AuthContext)
const location=useLocation();
const navigate=useNavigate();
const [load, setLoad]=useState({submit:false})
const [check, setCheck]=useState(false)
const [subName, setSubName]=useState("")
const [students, setStudents]=useState([])
const [studentsData, setStudentsData]=useState({})
const[mark,setMark]=useState({
    assignment:0,
    attendance:0,
    exam:0,
    seminar:0,
    total:function(){return this.attendance+this.assignment+this.seminar+this.exam}
})
const {sem, course, subject,year}=location.state
const studentRef=collection(db, "student")
useEffect(async()=>{
    let q =await query(studentRef, where("courseId", "==", course));
    q = await query(q, where("year", "==", year));
    await getDocs(q).then((querySnapshot)=>{
    setStudents(querySnapshot.docs);
    querySnapshot.forEach((obj)=>{
        studentsData[obj.data().regNo]=mark
    })
    });
    await getDoc(doc(db, 'courses', course)).then((snapShot)=>{
        snapShot.data()['sem'+sem].subjects.map(item=>{
                item.subCode==subject &&  setSubName(item.subName);
        })
    })
  },[])

async function uploadMarks(){
    setLoad({...load, submit:true})
    
    const promises=students.map(async (obj,index)=>{
        await setDoc(doc(db, "student", obj.data().regNo),{
            mark:{
                ...obj.data().mark,
                ['sem'+sem]:{
                    ...obj.data().mark['sem'+sem],
                    [subject]:{   
                        subCode: replaceSpecialCharecters(subject),
                        uploadedBy:user.displayName,
                        uploadedDate: new Date().toDateString(),
                        subName:subName,
                        assignment:studentsData[obj.data().regNo].assignment,
                        attendance:studentsData[obj.data().regNo].attendance,
                        seminar:studentsData[obj.data().regNo].seminar,
                        exam:studentsData[obj.data().regNo].exam,
                        total:studentsData[obj.data().regNo].total()
                    }
                }
            }
          },{ merge: true })
    })
    await Promise.all(promises);
    setLoad({...load,submit:false})
    alert("completed");
    navigate('/teacher')  
}
  return (
    <div className="main row uploadMark">
        <div className="head"><div><h6>Subject Details</h6></div></div>
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
                {students && students.map((obj,index)=>{
                        return <tr key={index}>
                        <td>{obj.data().regNo}</td>
                        <td>{obj.data().name}</td>
                        <td>
                            <input type="number" id="assignmentInput1" 
                            defaultValue={0}
                            value={studentsData[obj.data().regNo] && studentsData[obj.data().regNo].assignment} 
                            onChange={(e)=>{
                            setStudentsData({
                                ...studentsData,[obj.data().regNo]:{
                                                ...studentsData[obj.data().regNo],
                                                assignment:e.target.value>3 ? 3 : e.target.value<0 ? 0: parseInt(e.target.value)}
                            })}}/>
                        </td>
                        <td>
                            <input type="number"
                            defaultValue={0}
                            value={studentsData[obj.data().regNo] && studentsData[obj.data().regNo].attendance} 
                            onChange={(e)=>{
                            setStudentsData({
                                ...studentsData,[obj.data().regNo]:{
                                                ...studentsData[obj.data().regNo],
                                                attendance:e.target.value>3 ? 3 : e.target.value<0 ? 0: parseInt(e.target.value)}
                            })}}/>
                        </td>
                        <td>
                            <input type="number"
                            defaultValue={0}
                            value={studentsData[obj.data().regNo] && studentsData[obj.data().regNo].exam}
                            onChange={(e)=>{
                            setStudentsData({
                                ...studentsData,[obj.data().regNo]:{
                                                ...studentsData[obj.data().regNo],
                                                exam:e.target.value>6 ? 6 : e.target.value<0 ? 0: parseInt(e.target.value)}
                            })}}/>
                        </td>
                        <td>
                            <input type="number" 
                            defaultValue={0}
                            value={studentsData[obj.data().regNo] && studentsData[obj.data().regNo].seminar} 
                            onChange={(e)=>{
                            setStudentsData({
                                ...studentsData,[obj.data().regNo]:{
                                                ...studentsData[obj.data().regNo],
                                                seminar:e.target.value>3 ? 3 : e.target.value<0 ? 0: parseInt(e.target.value)}
                            })}}/>
                        </td>
                        <td>
                            <input type="number" disabled  defaultValue={0}
                            value={studentsData[obj.data().regNo] && studentsData[obj.data().regNo].total()}/>
                        </td>

                    </tr> 
                })}
                
                </tbody>
            </table>
        </div>
        <div className="btns">
        <div><button type="button" className="submit-btn" onClick={uploadMarks}>
                   {load.submit ?<ClipLoader size="25" color="white"/>: "Submit"}
                 </button></div>
        </div>
       
       
    </div>
  )
}

export default UploadMark