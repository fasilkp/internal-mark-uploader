import React, {useEffect,useState} from 'react'
import db from "../../config/firebase"
import { collection, onSnapshot, doc, getDoc } from "firebase/firestore"
import { ClipLoader } from 'react-spinners'
import { Link } from 'react-router-dom'

import "../../common styles/Login.css"
import "../SelectDetails/SelectDetails.css"



function SelectDetails() {
  
  const [courses, setCourses]=useState([])
  const [sem, setSem]=useState("1")
  const [subject, setSubject]=useState("cs")
  const [record, setRecord]=useState({})
  const [course, setCourse]=useState("bsc_computer_science")
  const [subLoad, setSubLoad]=useState(true)
  const [courseLoad, setCourseLoad]=useState(true)
  useEffect(()=>{
    onSnapshot(collection(db, "courses"),(snapshot)=>{
        setCourses(snapshot.docs);
        setCourseLoad(false)
    });
  },[])
  useEffect(()=>{
    setSubLoad(true)
    getDoc(doc(db, 'courses', course)).then((docSnap)=>{
        setRecord(docSnap.data())
        setSubLoad(false)
    });
  },[course])
  function replaceSpecialCharecters(str){
    return (" "+str).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "_").replace(/ /g, '_').toLowerCase().substr(1, str.length)
  }
  async function onCourseChange(e){
    setCourse(e.target.value)
    console.log(e.target.value);
    await getDoc(doc(db, 'courses', course)).then((docSnap)=>{
      setRecord(docSnap.data())
      console.log(docSnap.data());
    });
    
  }

  return (
    <div className='row admin-login select-details'>
        <div className="form-container">
        <form>
        <div className="mb-3"><h4 className="container-header"><span>Select Class Details</span></h4></div>
        <div className="mb-3">
                <label className="form-label">Course</label>
                {
                  courseLoad ? <div className='form-select'><ClipLoader size="15px"></ClipLoader></div> :
                
                <select className="form-select" value={course} onChange={onCourseChange} aria-label="Default select example">
                {courses.map((obj,index)=>{
                      return <option key={index} value={replaceSpecialCharecters(obj.data().name)}>{obj.data().name}</option>
                })}
                </select>}
            </div>
        <div className="mb-3">
                <label className="form-label">Current Sem</label>
                <select className="form-select" value={sem} onChange={(e)=>{
                  setSem(e.target.value)
                  console.log(record[sem].subjects)
                  }} aria-label="Default select example">
                <option value="1">First Semester</option>
                <option value="2">Second Semester</option>
                <option value="3">Third Semester</option>
                <option value="4">Fourth Semester</option>
                <option value="5">Fifth Semester</option>
                <option value="6">Sixth Semester</option>
                </select>
            </div>
        <div className="mb-3">
                <label className="form-label">Subject</label>
                {subLoad ? <div className='form-select'><ClipLoader size="15px"></ClipLoader></div> :
                <select className="form-select" value={subject} onChange={(e)=>setSubject(e.target.value)} aria-label="Default select example">
                  {
                    record['sem'+sem].subjects.map((item,index)=>{
                      return <option key={index} value={item}>{item}</option>
                    })
                  }
                </select>}
            </div>
        <div className="mb-3">
            <Link to="/teacher/upload-mark" state={{sem,course,subject}} className="links"><button className="login-btn">Enter</button>  </Link>
        </div>    
          </form>
    </div>
    </div>
  )
}

export default SelectDetails