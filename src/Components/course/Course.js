import '../../common styles/listStyle.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.development';
import React,{useEffect, useState} from 'react';
import db from "../../config/firebase"
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore"
function Course() {
    const [courses, setCourses]=useState([])
    useEffect(()=>{
        onSnapshot(collection(db, "courses"),(snapshot)=>{
          setCourses(snapshot.docs);
        });
      })
  return (
    <Fragment>
    <div className="text">Courses</div>
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
                        return <div className="lists">
                        <div className="title">{index+1}</div>
                        <div className="title">{obj.data().name}</div>
                        <div className="title buttons">
                            <div className="list-icon"><FontAwesomeIcon icon="pen"/></div>
                            <div className="list-icon" onClick={async ()=>{
                                 if(window.confirm("Are you sure ? you want to delete this record")){
                                    await deleteDoc(doc(db, "courses", obj.data().variable)).then(()=>{
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