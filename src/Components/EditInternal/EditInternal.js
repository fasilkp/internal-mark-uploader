import React,{useState, useEffect} from 'react'
import db from "../../config/firebase"
import {collection, query, where, getDocs,setDoc,doc} from 'firebase/firestore'
import "../UploadMark/UploadMark.css"
import { replaceSpecialCharecters } from '../../commonFunctions/idGenerate'
import { useLocation, useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'

function EditInternal() {
    const location =useLocation();
    const navigate=useNavigate()
    const {sem, subject,course,year}=location.state;
    const [load, setLoad]=useState({submit:false,page:true})
    const [students, setStudents]=useState([])
    const [totalMark, setTotalMark]=useState({})
    const [studentsData, setStudentsData]=useState({})
    const studentRef=collection(db, "student")
    useEffect(async()=>{
        let q =await query(studentRef, where("courseId", "==", course));
        q = await query(q, where("year", "==", year));
        await getDocs(q).then((querySnapshot)=>{
        setStudents(querySnapshot.docs);
        querySnapshot.docs.map((obj)=>{
            studentsData[obj.data().regNo]=obj.data()
            totalMark[obj.data().regNo]=obj.data().mark['sem'+sem][subject].total;
            setLoad({...load, page:false})
        })
        });
        
      },[])
      const editStudentData=(e,regNo,ctgry)=>{
        setStudentsData({
            ...studentsData,
            [regNo]:{
                ...studentsData[regNo],
                mark:{
                    ...studentsData[regNo].mark,
                    ['sem'+sem]:{
                        ...studentsData[regNo].mark['sem'+sem],
                        [subject]:{
                            ...studentsData[regNo].mark['sem'+sem][subject],
                            [ctgry]:parseInt(e.target.value)>5 ? 5 : parseInt(e.target.value)<0 ? 0 : parseInt(e.target.value),
                            total:totalMark[regNo]
                        }
                    }
                }
            }
        })
      }
      const saveChanges=async (e)=>{
        e.preventDefault();
        setLoad({...load, submit:true})
        const promises=students.map(async (obj,index)=>{
            await setDoc(doc(db, "student", obj.data().regNo),{
                mark:{
                    ...obj.data().mark,
                    ['sem'+sem]:{
                        ...obj.data().mark['sem'+sem],
                        [subject]:{   
                            subCode: replaceSpecialCharecters(subject),
                            subName:subject,
                            assignment:studentsData[obj.data().regNo].mark['sem'+sem][subject].assignment,
                            attendance:studentsData[obj.data().regNo].mark['sem'+sem][subject].attendance,
                            seminar:studentsData[obj.data().regNo].mark['sem'+sem][subject].seminar,
                            exam:studentsData[obj.data().regNo].mark['sem'+sem][subject].exam,
                            total:totalMark[obj.data().regNo]
                        }
                    }
                }
              },{ merge: true })
        })
        await Promise.all(promises);
        setLoad({...load,submit:false})
        alert("Successfully Edited");
        // navigate('/teacher')  
      }
  return (
    <div className="main row uploadMark">
        {load.page && <div className="loader"><ClipLoader/></div>}
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
                    Object.values(studentsData).map((obj, index)=>{
                        return <tr key={index}>
                            <td>{obj.regNo}</td>
                            <td>{obj.name}</td>

                            <td>{obj.mark.hasOwnProperty('sem'+sem) ?
                            <input type="number" value={studentsData[obj.regNo].mark['sem'+sem][subject].assignment}
                            onChange={(e)=>editStudentData(e,obj.regNo,'assignment')}
                            onKeyUp={(e)=>{
                                setTotalMark({...totalMark,
                                [obj.regNo]:studentsData[obj.regNo].mark['sem'+sem][subject].assignment+studentsData[obj.regNo].mark['sem'+sem][subject].attendance+
                                studentsData[obj.regNo].mark['sem'+sem][subject].seminar+studentsData[obj.regNo].mark['sem'+sem][subject].exam})}} /> : "N/A"}</td>

                            <td>{obj.mark.hasOwnProperty('sem'+sem) ?
                            <input type="number" value={studentsData[obj.regNo].mark['sem'+sem][subject].attendance}
                            onChange={(e)=>editStudentData(e,obj.regNo,'attendance')}
                            onKeyUp={(e)=>{
                                setTotalMark({...totalMark,
                                [obj.regNo]:studentsData[obj.regNo].mark['sem'+sem][subject].assignment+studentsData[obj.regNo].mark['sem'+sem][subject].attendance+
                                studentsData[obj.regNo].mark['sem'+sem][subject].seminar+studentsData[obj.regNo].mark['sem'+sem][subject].exam})}}/> : "N/A"}</td>

                            <td>{obj.mark.hasOwnProperty('sem'+sem) ?
                            <input type="number" value={studentsData[obj.regNo].mark['sem'+sem][subject].exam}
                            onChange={(e)=>editStudentData(e,obj.regNo, 'exam')}
                            onKeyUp={(e)=>{
                                setTotalMark({...totalMark,
                                [obj.regNo]:studentsData[obj.regNo].mark['sem'+sem][subject].assignment+studentsData[obj.regNo].mark['sem'+sem][subject].attendance+
                                studentsData[obj.regNo].mark['sem'+sem][subject].seminar+studentsData[obj.regNo].mark['sem'+sem][subject].exam})}}/> : "N/A"}</td>

                            <td>{obj.mark.hasOwnProperty('sem'+sem) ?
                            <input type="number" value={studentsData[obj.regNo].mark['sem'+sem][subject].seminar}
                            onChange={(e)=>editStudentData(e,obj.regNo, 'seminar')}
                            onKeyUp={(e)=>{
                                setTotalMark({...totalMark,
                                [obj.regNo]:studentsData[obj.regNo].mark['sem'+sem][subject].assignment+studentsData[obj.regNo].mark['sem'+sem][subject].attendance+
                                studentsData[obj.regNo].mark['sem'+sem][subject].seminar+studentsData[obj.regNo].mark['sem'+sem][subject].exam})}}/> : "N/A"}</td>

                            <td>{obj.mark.hasOwnProperty('sem'+sem) ?
                            <input type="number" value={totalMark[obj.regNo]}/> : "N/A"}</td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>
        <div className="btns">
        <div><button type="button" className="submit-btn" onClick={saveChanges}>
                   {load.submit ?<ClipLoader size="25" color="white"/>: "Save"}
                 </button></div>
        </div>
    </div>
  )
}

export default EditInternal