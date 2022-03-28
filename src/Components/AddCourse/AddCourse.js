import React, { useState , useEffect} from 'react'
import { Fragment } from 'react/cjs/react.development'
import { useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ClipLoader } from 'react-spinners';
import "../../common styles/containerStyles.css"
import { replaceSpecialCharecters } from '../../commonFunctions/idGenerate';

import db from "../../config/firebase"
import { setDoc, doc } from "firebase/firestore"

import "./AddCourse.css"

function AddCourse() {
  const [course, setCourse]=useState({name:"", variable:""})
  const [input1, setInput1]=useState({subName:"", subCode:""})
  const [input2, setInput2]=useState({subName:"", subCode:""})
  const [input3, setInput3]=useState({subName:"", subCode:""})
  const [input4, setInput4]=useState({subName:"", subCode:""})
  const [input5, setInput5]=useState({subName:"", subCode:""})
  const [input6, setInput6]=useState({subName:"", subCode:""})

  const [load, setLoad]=useState(true)
  const [submitLoader, setSubmitLoader]=useState(false)

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
    }
    
  const addToSem2=()=>{setSem2({...sem2,
    subjects:[...sem2.subjects, input2]})
    }

  const addToSem3=()=>{setSem3({...sem3,
    subjects:[...sem3.subjects, input3]})
    }

  const addToSem4=()=>{setSem4({...sem4,
    subjects:[...sem4.subjects, input4]})
   }

  const addToSem5=()=>{setSem5({...sem5,
    subjects:[...sem5.subjects, input5]})
   }

  const addToSem6=()=>{setSem6({...sem6,
    subjects:[...sem6.subjects, input6]})
    }


  async function onHandleSubmit(){
    setSubmitLoader(true)
    await setDoc(doc(db, "courses", course.variable), {
      name:course.name,
      id:course.variable,
      sem1,
      sem2,
      sem3,
      sem4,
      sem5,
      sem6
    }).then(()=>{
      console.log("uploaded");
      navigate('/admin')
      setSubmitLoader(false)
    })
  }
  const removeELement=(index,n)=>{
        const sem=eval("sem"+n+".subjects")
        sem.splice(index, 1)
        eval("setSem"+n+"({subjects:[...sem]})");
        console.log(sem1);
  }
  useEffect(()=>{
    setLoad(false)
  })
  return (
      <Fragment>
    <div className="text">Add Course</div>
    {load && <div className="loader"><ClipLoader/></div>}
    <div className="main edit-container">
    <div className="form-container">
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <div className="mb-3"><h4 className="container-header">Add Course Details</h4></div>
            <div className="mb-3">
              <label for="name" className="form-label">Course Name</label>
              <input type="text" className="form-control" id="add-course-name" value={course.name} onChange={(e)=>{
                setCourse({
                name:e.target.value,
                variable:replaceSpecialCharecters(e.target.value)
                })
                }} placeholder='Enter Course Name' />
            </div>
            <div className="mb-3">
              <label className="form-label">Sem 1</label>
              <div class="input-group mb-3">
                  <input type="text" class="form-control add-subject-input" value={input1.subName} onChange={(e)=>{
                    setInput1({...input1, subName:e.target.value.toUpperCase()})}}  placeholder="Enter sem Subjects" 
                    aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <input type="text" class="form-control add-subject-input" value={input1.subCode} onChange={(e)=>{
                    setInput1({...input1, subCode:e.target.value.toUpperCase()})}}  placeholder="Enter subject Code" 
                    aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addToSem1}>Add</button>
            </div>
                <ul class="list-group">
                  {
                    sem1.subjects.map((item,index)=>{
                      return <li class="list-group-item">({item.subCode}) &nbsp; {item.subName}<div className="list-icon list-icons" onClick={()=>removeELement(index, 1)}>
                        <FontAwesomeIcon className='penIcon' icon="trash"/></div></li>
                    })
                  }
                </ul>
            </div>
            <div className="mb-3">
              <label className="form-label">Sem 2</label>
              <div class="input-group mb-3">
                  <input type="text" class="form-control add-subject-input" value={input2.subName} 
                  onChange={(e)=>{setInput2({...input2, subName:e.target.value.toUpperCase()})}}  placeholder="Enter sem Subjects" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <input type="text" class="form-control add-subject-input" value={input2.subCode} 
                  onChange={(e)=>{setInput2({...input2, subCode:e.target.value.toUpperCase()})}}  placeholder="Enter subject Code" 
                  aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addToSem2}>Add</button>
            </div>
                <ul class="list-group">
                {
                    sem2.subjects.map((item,index)=>{
                      return <li class="list-group-item">({item.subCode}) &nbsp; {item.subName}<div className="list-icon list-icons" onClick={()=>removeELement(index, 2)}><FontAwesomeIcon className='penIcon' icon="trash"/></div></li>
                    })
                  }
                </ul>
            </div>
            <div className="mb-3">
              <label className="form-label">Sem 3</label>
              <div class="input-group mb-3">
                  <input type="text" class="form-control add-subject-input" value={input3.subName} onChange={(e)=>{setInput3({...input3, subName:e.target.value.toUpperCase()})}}  placeholder="Enter sem Subjects" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <input type="text" class="form-control add-subject-input" value={input3.subCode} 
                  onChange={(e)=>{setInput3({...input3, subCode:e.target.value.toUpperCase()})}}  placeholder="Enter subject Code" 
                  aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addToSem3}>Add</button>
            </div>
                <ul class="list-group">
                {
                    sem3.subjects.map((item,index)=>{
                      return <li class="list-group-item">({item.subCode}) &nbsp; {item.subName}<div className="list-icon list-icons" onClick={()=>removeELement(index, 3)}><FontAwesomeIcon className='penIcon' icon="trash"/></div></li>
                    })
                  }
                </ul>
            </div>
            <div className="mb-3">
              <label className="form-label">Sem 4</label>
              <div class="input-group mb-3">
                  <input type="text" class="form-control add-subject-input" value={input4.subName} onChange={(e)=>{setInput4({...input4, subName:e.target.value.toUpperCase()})}}  placeholder="Enter sem Subjects" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <input type="text" class="form-control add-subject-input" value={input4.subCode} 
                  onChange={(e)=>{setInput4({...input4, subCode:e.target.value.toUpperCase()})}}  placeholder="Enter subject Code" 
                  aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addToSem4}>Add</button>
            </div>
                <ul class="list-group">
                {
                    sem4.subjects.map((item,index)=>{
                      return <li class="list-group-item">({item.subCode}) &nbsp; {item.subName}<div className="list-icon list-icons" onClick={()=>removeELement(index, 4)}><FontAwesomeIcon className='penIcon' icon="trash"/></div></li>
                    })
                  }
                </ul>
            </div>
            <div className="mb-3">
              <label className="form-label">Sem 5</label>
              <div class="input-group mb-3">
                  <input type="text" class="form-control add-subject-input" value={input5.subName} onChange={(e)=>{setInput5({...input5, subName:e.target.value.toUpperCase()})}}  placeholder="Enter sem Subjects" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <input type="text" class="form-control add-subject-input" value={input5.subCode} 
                  onChange={(e)=>{setInput5({...input5, subCode:e.target.value.toUpperCase()})}}  placeholder="Enter subject Code" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addToSem5}>Add</button>
            </div>
                <ul class="list-group">
                {
                    sem5.subjects.map((item,index)=>{
                      return <li class="list-group-item">({item.subCode}) &nbsp; {item.subName}<div className="list-icon list-icons" onClick={()=>removeELement(index, 5)}><FontAwesomeIcon className='penIcon' icon="trash"/></div></li>
                    })
                  }
                </ul>
            </div>
            <div className="mb-3">
              <label className="form-label">Sem 6</label>
              <div class="input-group mb-3">
                  <input type="text" class="form-control add-subject-input" value={input6.subName} onChange={(e)=>{setInput6({...input6, subName:e.target.value.toUpperCase()})}}  placeholder="Enter sem Subjects" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <input type="text" class="form-control add-subject-input" value={input6.subCode} 
                  onChange={(e)=>{setInput6({...input6, subCode:e.target.value.toUpperCase()})}}  placeholder="Enter subject Code" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addToSem6}>Add</button>
            </div>
                <ul class="list-group">
                {
                    sem6.subjects.map((item,index)=>{
                      return <li class="list-group-item">({item.subCode}) &nbsp; {item.subName}<div className="list-icon list-icons" onClick={()=>removeELement(index, 6)}><FontAwesomeIcon className='penIcon' icon="trash"/></div></li>
                    })
                  }
                </ul>
            </div>
           
            <div className="btn">
                <button type="reset" className="btn btn-danger">Clear</button>
                <button type="button" onClick={onHandleSubmit} className="btn btn-primary">{submitLoader?<ClipLoader size="25" color="white"/>: "Submit"}</button>
            </div>
            
          </form>
    </div>
</div>
</Fragment>
  )
}

export default AddCourse