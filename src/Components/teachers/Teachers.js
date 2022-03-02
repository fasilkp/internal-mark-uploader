import React, {useEffect, useState} from 'react'
import '../../common styles/listStyle.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from 'react/cjs/react.development';
import {Link} from "react-router-dom"
import db from "../../config/firebase"
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore"
function Teachers() {
    const [teachers, setTeachers]=useState([])
    useEffect(()=>{
        onSnapshot(collection(db, "teachers"),(snapshot)=>{
          setTeachers(snapshot.docs);
        });
      })
  return (
    <Fragment>
    <div className="text">Teachers</div>
    <div>
        <div className="container">
            <div className="list-container">
                <div className="list-header">
                    <div className="head">Reg No</div>
                    <div className="head">Name</div>
                    <div className="head">Edits</div>
                </div>
                {
                    teachers.map((obj,index)=>{
                        return <div className="lists">
                        <div className="title">{obj.data().regNo}</div>
                        <div className="title">{obj.data().name}</div>
                        <div className="title buttons">
                            <Link to="/admin/edit-teacher" state={{
                                obj:obj.data()
                                }}><div className="list-icon"><FontAwesomeIcon icon="pen"/></div></Link>
                            <div className="list-icon" onClick={async ()=>{
                                 if(window.confirm("Are you sure ? you want to delete this record")){
                                    await deleteDoc(doc(db, "teachers", obj.data().regNo)).then(()=>{
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
                <Link to="/admin/add-teacher"><button className="add-button">Add Teacher</button></Link>
            </div>
        </div>
    </div>
    </Fragment>
  )
}

export default Teachers