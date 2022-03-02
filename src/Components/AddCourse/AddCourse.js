import React, { useState } from 'react'
import { Fragment } from 'react/cjs/react.development'
import { useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../common styles/containerStyles.css"
import "./AddCourse.css"

import db from "../../config/firebase"
import { setDoc, doc } from "firebase/firestore"


function AddCourse() {
  const [course, setCourse]=useState({name:"", variable:""})
  const [input1, setInput1]=useState('')
  const [input2, setInput2]=useState('')
  const [input3, setInput3]=useState('')
  const [input4, setInput4]=useState('')
  const [input5, setInput5]=useState('')
  const [input6, setInput6]=useState('')

  const navigate=useNavigate();

  const [sem1, setSem1]=useState({subjects:[]})
  const [sem2, setSem2]=useState({subjects:[]})
  const [sem3, setSem3]=useState({subjects:[]})
  const [sem4, setSem4]=useState({subjects:[]})
  const [sem5, setSem5]=useState({subjects:[]})
  const [sem6, setSem6]=useState({subjects:[]})
  const addToSem1=()=>{
  setSem1({...sem1,
    subjects:[...sem1.subjects, input1]})
    setInput1("")}
    
  const addToSem2=()=>{setSem2({...sem2,
    subjects:[...sem2.subjects, input2]})
    setInput2("")}

  const addToSem3=()=>{setSem3({...sem3,
    subjects:[...sem3.subjects, input3]})
    setInput3("")}

  const addToSem4=()=>{setSem4({...sem4,
    subjects:[...sem4.subjects, input4]})
    setInput4("")}

  const addToSem5=()=>{setSem5({...sem5,
    subjects:[...sem5.subjects, input5]})
    setInput5("")}

  const addToSem6=()=>{setSem6({...sem6,
    subjects:[...sem6.subjects, input6]})
    setInput6("")}

  function replaceSpecialCharecters(str){
    return (" "+str).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "_").replace(/ /g, '_').toLowerCase().substr(1, str.length)
  }
  async function onHandleSubmit(){
    await setDoc(doc(db, "courses", course.variable), {
      name:course.name,
      variable:course.variable,
      sem1,
      sem2,
      sem3,
      sem4,
      sem5,
      sem6
    }).then(()=>{
      console.log("uploaded");
      navigate('/admin')
    })
  }

  return (
      <Fragment>
    <div className="text">Add Course</div>
    <div className="main">
    <div className="form-container">
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <div className="mb-3"><h4 className="container-header">Add Course Details</h4></div>
            <div className="mb-3">
              <label for="name" className="form-label">Course Name</label>
              <input type="text" className="form-control" value={course.name} onChange={(e)=>{
                setCourse({
                name:e.target.value,
                variable:replaceSpecialCharecters(e.target.value)
                })
                }} id="name" placeholder='Enter Student Name' />
            </div>
            <div className="mb-3">
              <label className="form-label">Sem 1</label>
              <div class="input-group mb-3">
                  <input type="text" class="form-control add-subject-input" value={input1} onChange={(e)=>{setInput1(e.target.value)}}  placeholder="Enter sem 1 Subjects" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addToSem1}>Add</button>
            </div>
                <ul class="list-group">
                  {
                    sem1.subjects.map((item)=>{
                      return <li class="list-group-item">{item}<div className="list-icon list-icons"><FontAwesomeIcon className='penIcon' icon="trash"/></div></li>
                    })
                  }
                </ul>
            </div>
            <div className="mb-3">
              <label className="form-label">Sem 2</label>
              <div class="input-group mb-3">
                  <input type="text" class="form-control add-subject-input" value={input2} onChange={(e)=>{setInput2(e.target.value)}}  placeholder="Enter sem 2 Subjects" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addToSem2}>Add</button>
            </div>
                <ul class="list-group">
                {
                    sem2.subjects.map((item)=>{
                      return <li class="list-group-item">{item}<div className="list-icon list-icons"><FontAwesomeIcon className='penIcon' icon="trash"/></div></li>
                    })
                  }
                </ul>
            </div>
            <div className="mb-3">
              <label className="form-label">Sem 3</label>
              <div class="input-group mb-3">
                  <input type="text" class="form-control add-subject-input" value={input3} onChange={(e)=>{setInput3(e.target.value)}}  placeholder="Enter sem 3 Subjects" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addToSem3}>Add</button>
            </div>
                <ul class="list-group">
                {
                    sem3.subjects.map((item)=>{
                      return <li class="list-group-item">{item}<div className="list-icon list-icons"><FontAwesomeIcon className='penIcon' icon="trash"/></div></li>
                    })
                  }
                </ul>
            </div>
            <div className="mb-3">
              <label className="form-label">Sem 4</label>
              <div class="input-group mb-3">
                  <input type="text" class="form-control add-subject-input" value={input4} onChange={(e)=>{setInput4(e.target.value)}}  placeholder="Enter sem 3 Subjects" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addToSem4}>Add</button>
            </div>
                <ul class="list-group">
                {
                    sem4.subjects.map((item)=>{
                      return <li class="list-group-item">{item}<div className="list-icon list-icons"><FontAwesomeIcon className='penIcon' icon="trash"/></div></li>
                    })
                  }
                </ul>
            </div>
            <div className="mb-3">
              <label className="form-label">Sem 5</label>
              <div class="input-group mb-3">
                  <input type="text" class="form-control add-subject-input" value={input5} onChange={(e)=>{setInput5(e.target.value)}}  placeholder="Enter sem 3 Subjects" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addToSem5}>Add</button>
            </div>
                <ul class="list-group">
                {
                    sem5.subjects.map((item)=>{
                      return <li class="list-group-item">{item}<div className="list-icon list-icons"><FontAwesomeIcon className='penIcon' icon="trash"/></div></li>
                    })
                  }
                </ul>
            </div>
            <div className="mb-3">
              <label className="form-label">Sem 6</label>
              <div class="input-group mb-3">
                  <input type="text" class="form-control add-subject-input" value={input6} onChange={(e)=>{setInput6(e.target.value)}}  placeholder="Enter sem 3 Subjects" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addToSem6}>Add</button>
            </div>
                <ul class="list-group">
                {
                    sem6.subjects.map((item)=>{
                      return <li class="list-group-item">{item}<div className="list-icon list-icons"><FontAwesomeIcon className='penIcon' icon="trash"/></div></li>
                    })
                  }
                </ul>
            </div>
           
            <div className="btn">
                <button type="reset" className="btn btn-danger">Clear</button>
                <button type="button" onClick={onHandleSubmit} className="btn btn-primary">Submit</button>
            </div>
            
          </form>
    </div>
</div>
</Fragment>
  )
}

export default AddCourse