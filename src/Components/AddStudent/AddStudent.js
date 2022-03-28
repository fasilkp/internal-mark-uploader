import React, {useState, useEffect} from 'react'
import { useNavigate,Link } from 'react-router-dom'
import db from '../../config/firebase'
import { onSnapshot, collection,setDoc, doc , getDoc} from 'firebase/firestore'
import { Fragment } from 'react/cjs/react.development'
import "../../common styles/containerStyles.css"
import { ClipLoader } from 'react-spinners'
import {replaceSpecialCharecters} from "../../commonFunctions/idGenerate"

function AddStudent() {
  const [submitLoader, setSubmitLoader]=useState(false)
  const [load, setLoad]=useState({page:true, submit:false});
  const [formComplete, setFormComplete]=useState(false)
  const [name, setName]=useState("");
  const [regNo, setRegNo]=useState("");
  const [course, setCourse]=useState("");
  const [years, setYears]=useState([]);
  const [year, setYear]=useState('');
  const [courses, setCourses]=useState([]);
  const navigate=useNavigate();
  useEffect(async ()=>{
    onSnapshot(collection(db, "courses"),(snapshot)=>{
      setCourses(snapshot.docs);
      setCourse(snapshot.docs[0].data().name)
      setLoad({...load, page:false})
    });
    let currentYear=new Date().getFullYear();
    for(var i=2019; i<=currentYear; i++){
      years.push(i+'-'+(i+3))
    }
    setYear(years[0])
  },[]) 
  async function handleSubmit(){
    setLoad({...load, submit:true})
      await getDoc(doc(db, 'student', regNo)).then((docSnap)=>{
        if(docSnap.exists()){
          alert("record already exist")
          window.location.reload()
        }
        else{
          setDoc(doc(db, "student", regNo), {
            courseId:replaceSpecialCharecters(course),
            regNo,name,course,year,
            mark:{}
          }).then(()=>{
            setLoad({...load, submit:false})
            alert("Successfully Inserted");
            window.loaction.reload()
          })
        }
    });  
  }
  function checkFormFill(){
    if(name!=="" && regNo!==""){
      setFormComplete(true)
    }
    else{
      setFormComplete(false)
    }
  }
  return (
      <Fragment>
    <div className="text">Add Student</div>
    {load.page && <div className="loader"><ClipLoader/></div>}
    <div className="main">
    <div className="form-container">
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <div className="mb-3"><h4 className="container-header">Add Student Details</h4></div>
            <div className="mb-3">
              <label className="form-label">Student Name</label>
              <input type="text" className="form-control" id="name" value={name}
              onChange={(e)=>setName(e.target.value.toUpperCase())}
              onKeyUp={checkFormFill}
              placeholder='Enter Student Name' />
            </div>
            <div className="mb-3">
              <label className="form-label">Register No</label>
              <input type="text" className="form-control" id="reg" value={regNo} 
              onChange={(e)=>setRegNo(e.target.value.toUpperCase())}
              onKeyUp={checkFormFill} 
              placeholder='Enter Register No' />
            </div>
            
            <div className="mb-3">
                <label className="form-label">Course</label>
                <select className="form-select" value={course} onChange={(e)=>setCourse(e.target.value)}>
                <option disabled>Select course</option>
                {courses && courses.map((obj, index)=>{
                  return <option key={index} value={obj.data().name}>{obj.data().name}</option>
                })}
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">Year</label>
                <select className="form-select" value={year} onChange={(e)=>setYear(e.target.value)}>
                {
                  years.map((item,index)=>{
                    return <option key={index} value={item}>{item}</option>
                  })
                }
            </select>
            </div>
            <div className="mb-3">
                <Link to="/admin/student-details-upload">Upload more Students</Link>
            </div>
            
            <div className="btn">
               <button type="reset" className="btn btn-danger">reset</button>
                 <button type="button" disabled={!formComplete} className="btn btn-primary" onClick={handleSubmit}>
                   {load.submit ?<ClipLoader size="25" color="white"/>: "Submit"}
                 </button>
            </div>
          </form>
    </div>
    
</div>
</Fragment>
  )
}

export default AddStudent