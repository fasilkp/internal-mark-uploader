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
  const {obj}=location.state
  const [submitLoader, setSubmitLoader]=useState(false)
  const [load, setLoad]=useState(true);
  const [name, setName]=useState(obj.name);
  const [regNo, setRegNo]=useState(obj.regNo);
  const [curSem, setCurSem]=useState(obj.current_sem);
  const [course, setCourse]=useState(obj.course);
  const [courses, setCourses]=useState([]);
  const navigate=useNavigate();
  useEffect(()=>{
    onSnapshot(collection(db, "courses"),(snapshot)=>{
      setCourses(snapshot.docs);
      setLoad(false)

    });
  }) 
  async function handleSubmit(){
      setSubmitLoader(true)
      await setDoc(doc(db, "student", regNo), {
        regNo,
        name,
        course,
        current_sem:curSem,

      }).then(()=>{
        setSubmitLoader(false)
        navigate('/admin/student')
        alert("Successfully edited");
      })
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
              <input type="text" className="form-control" id="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Student Name' />
            </div>
            <div className="mb-3">
              <label for="reg" className="form-label">Register No</label>
              <input type="text" className="form-control" id="reg" value={regNo} onChange={(e)=>setRegNo(e.target.value.toUpperCase())} placeholder='Enter Register No' />
            </div>
            
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Course</label>
                <select className="form-select" value={course} onChange={(e)=>setCourse(e.target.value)} aria-label="Default select example">
                <option selected>Select course</option>
                {courses && courses.map((obj, index)=>{
                  return <option value={obj.data().name}>{obj.data().name}</option>
                })}
                </select>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Current Sem</label>
                <select className="form-select" value={curSem} onChange={(e)=>setCurSem(e.target.value)} aria-label="Default select example">
                <option value="1">First Semester</option>
                <option value="2">Second Semester</option>
                <option value="3">Third Semester</option>
                <option value="4">Fourth Semester</option>
                <option value="5">Fifth Semester</option>
                <option value="6">Sixth Semester</option>
                </select>
            </div>
            
            <div className="btn">
                <button type="reset" className="btn btn-danger">reset</button>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>{submitLoader?<ClipLoader size="25" color="white"/>: "Submit"}</button>
            </div>
          </form>
    </div>
</div>
</Fragment>
  )
}

export default EditStudent