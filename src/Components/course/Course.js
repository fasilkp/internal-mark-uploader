import '../../common styles/listStyle.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import React,{useEffect, useState,Fragment} from 'react';
import db from "../../config/firebase"
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore"
import {ClipLoader} from 'react-spinners'

function Course() {
    const [courses, setCourses]=useState([])
    const [load, setLoad]=useState(true)
    useEffect(()=>{
        onSnapshot(collection(db, "courses"),(snapshot)=>{
          setCourses(snapshot.docs);
          setLoad(false)
        });
      },[])
  return (
    <Fragment>
        
    <div className="text">Courses</div>
    {load && <div className="loader"><ClipLoader/></div>}
    <div>
        <div className="container">
            <div className="list-container">
                <div className="list-header">
                    <div className="head">SL.No</div>
                    <div className="head">Courses</div>
                    <div className="head">Edits</div>
                </div>
                {
                    courses.map((obj, index)=>{
                        return <div className="lists" key={index}>
                        <div className="title">{index+1}</div>
                        <div className="title">{obj.data().name.toUpperCase()}</div>
                        <div className="title buttons">
                            <Link to="/admin/edit-course" state={{obj:obj.data()}}><div className="list-icon"><FontAwesomeIcon icon="pen"/></div></Link>
                            <div className="list-icon" onClick={async ()=>{
                                 if(window.confirm("Are you sure ? you want to delete this record")){
                                    await deleteDoc(doc(db, "courses", obj.data().id)).then(()=>{
                                        console.log("deleted");
                                    })
                                }
                                else{
                                    console.log("canceled");
                                }
                            }}><FontAwesomeIcon icon="trash"/></div>
            
                        </div>
                    </div>
                    })
                }
                
                
            </div>
            
            <div className="button">
            <Link className='links'to="/admin/add-course"><button className="add-button">Add Course</button></Link>
            </div>
        </div>
    </div>
    </Fragment>
  )
}

export default Course