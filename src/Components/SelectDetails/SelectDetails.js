import React, {useEffect,useState} from 'react'
import db from "../../config/firebase"
import { collection, onSnapshot, doc, getDoc } from "firebase/firestore"
import { ClipLoader } from 'react-spinners'
import { Link,useParams } from 'react-router-dom'
import "../../common styles/Login.css"
import "../SelectDetails/SelectDetails.css"

function SelectDetails() {
  const {urlPath}=useParams()
  const [courses, setCourses]=useState([])
  const [sem, setSem]=useState("1")
  const [years, setYears]=useState([])
  const [year, setYear]=useState("")
  const [subject, setSubject]=useState("")
  const [record, setRecord]=useState({})
  const [course, setCourse]=useState("bca")
  const [subLoad, setSubLoad]=useState(true)
  const [courseLoad, setCourseLoad]=useState(true)
  useEffect(()=>{
    onSnapshot(collection(db, "courses"),(snapshot)=>{
        setCourses(snapshot.docs);
        setCourse(snapshot.docs[0].data().id)
        setCourseLoad(false)
    },[]);
    let currentYear=new Date().getFullYear();
    for(var i=2019; i<=currentYear; i++){
      years.push(i+'-'+(i+3))
    }
    setYear(years[0])

  },[])
  useEffect(()=>{
      getDoc(doc(db, 'courses', course)).then((docSnap)=>{
        setRecord(docSnap.data())
        setSubLoad(false)
      });
  },[course,sem])


  return (
    <div className='row admin-login select-details'>
        <div className="form-container">
        <form>
        <div className="mb-3"><h4 className="container-header"><span>Select Class Details</span></h4></div>
        <div className="mb-3">
                <label className="form-label">Course</label>
                {
                  courseLoad ? <div className='form-select'><ClipLoader size="15px"></ClipLoader></div> :
                
                <select className="form-select" value={course} onChange={(e)=>{
                  setSubLoad(true)
                  setSubject("")
                  setCourse(e.target.value)}}>
                {courses.map((obj,index)=>{
                      return <option key={index} value={obj.data().id}>{obj.data().name}</option>
                })}
                </select>}
            </div>
        <div className="mb-3">
                <label className="form-label">Current Sem</label>
                <select className="form-select" value={sem} onChange={(e)=>{
                  setSem(e.target.value)
                  setSubject("")
                  // setSubject(record['sem'+sem].subjects[0])
                  }}>
                <option value="1">First Semester</option>
                <option value="2">Second Semester</option>
                <option value="3">Third Semester</option>
                <option value="4">Fourth Semester</option>
                <option value="5">Fifth Semester</option>
                <option value="6">Sixth Semester</option>
                </select>
            </div>
        <div className="mb-3">
                <label className="form-label">Year</label>
                <select className="form-select" value={year} onChange={(e)=>{
                  setYear(e.target.value)}}>
                {
                  years.map((item, index)=>{
                    return <option key={index} value={item}>{item}</option>
                  })
                }

                </select>
            </div>
        <div className="mb-3">
                <label className="form-label">Subject</label>
                {subLoad ? <div className='form-select'><ClipLoader size="15px"></ClipLoader></div> :
                <select className="form-select" value={subject} onChange={(e)=>setSubject(e.target.value)}>
                  <option>Select Subject</option>
                  {record && record['sem'+sem] &&
                    record['sem'+sem].subjects.map((item,index)=>{
                      return <option key={index} value={item.subCode}>{item.subCode} : {item.subName}</option>
                    })
                  }
                </select>}
            </div>
        <div className="mb-3">
          { subject ===""
            ? <button className="login-btn" disabled>Enter</button>
            : <Link to={`/teacher/${urlPath}`} state={{sem,course,subject,year}} className="links"><button className="login-btn" >Enter</button>  </Link>}
        </div>    
          </form>
    </div>
    </div>
  )
}

export default SelectDetails