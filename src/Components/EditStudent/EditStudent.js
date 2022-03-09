import React ,{useEffect,useState}from 'react'
import { useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import db from '../../config/firebase'
import { onSnapshot, collection, docs, setDoc, doc } from 'firebase/firestore'
import { useLocation } from 'react-router-dom'
import { Fragment } from 'react/cjs/react.development'
import "../../common styles/containerStyles.css"

function EditStudent() {
  const location =useLocation();
  const [formComplete, setFormComplete]=useState(false)
  const {obj}=location.state
  const [submitLoader, setSubmitLoader]=useState(false)
  const [load, setLoad]=useState(true);
  const [name, setName]=useState(obj.name);
  const [regNo, setRegNo]=useState(obj.regNo);
  const [year, setYear]=useState(obj.year);
  const [years, setYears]=useState([]);
  const [course, setCourse]=useState(obj.course);
  const [courses, setCourses]=useState([]);
  const navigate=useNavigate();
  useEffect(()=>{
    onSnapshot(collection(db, "courses"),(snapshot)=>{
      setCourses(snapshot.docs);
      setLoad(false)
    });
    let currentYear=new Date().getFullYear();
    for(var i=2019; i<=currentYear; i++){
      years.push(i+'-'+(i+3))
    }
    setYear(years[0])
  },[]) 
  async function handleSubmit(){
      setSubmitLoader(true)
      await setDoc(doc(db, "student", regNo), {
        regNo,name,course,year
      }).then(()=>{
        setSubmitLoader(false)
        navigate('/admin/student')
        alert("Successfully edited");
      })
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
    <div className="text">Edit Student</div>
    {load && <div className="loader"><ClipLoader/></div>}
    <div className="main">
    <div className="form-container">
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <div className="mb-3"><h4 className="container-header">Add Student Details</h4></div>
            <div className="mb-3">
              <label for="name" className="form-label">Student Name</label>
              <input type="text" className="form-control" id="name" value={name} 
              onChange={(e)=>setName(e.target.value)}
              onKeyUp={checkFormFill}
              placeholder='Enter Student Name' />
            </div>
            <div className="mb-3">
              <label for="reg" className="form-label">Register No</label>
              <input type="text" className="form-control" id="reg" value={regNo} 
              onChange={(e)=>setRegNo(e.target.value.toUpperCase())}
              onKeyUp={checkFormFill} 
              placeholder='Enter Register No' />
            </div>
            
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Course</label>
                <select className="form-select" value={course} onChange={(e)=>setCourse(e.target.value)} aria-label="Default select example">
                <option selected>Select course</option>
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
            
            <div className="btn">
                <button type="reset" className="btn btn-danger">reset</button>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}
                disabled={!formComplete}
                >{submitLoader?<ClipLoader size="25" color="white"/>: "Submit"}</button>
            </div>
          </form>
    </div>
</div>
</Fragment>
  )
}

export default EditStudent