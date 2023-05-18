import React, { useState, useEffect,Fragment } from 'react'
import '../../common styles/listStyle.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom'
import db from "../../config/firebase"
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore"
import {ClipLoader} from 'react-spinners'
function Student() {
    const [load, setLoad]=useState({page:true, delete:false});
    const [students, setStudents]=useState([]);
    useEffect(()=>{
        onSnapshot(collection(db, "student"),(snapshot)=>{
            setStudents(snapshot.docs);
            setLoad({...load, page:false})
          });
      },[])
    const deleteItem=async (id)=>{
        setLoad({...load, delete:true})
         if(window.confirm("Are you sure ? you want to delete this record")){
            await deleteDoc(doc(db, "student", id)).then(()=>{
                setLoad({...load, delete:false})
            })
           
        }
        else{
            console.log("canceled");
        }
    }
  return (
    <Fragment>
    <div className="text">Student</div>
    {load.page && <div className="loader"><ClipLoader></ClipLoader> </div>}
    {load.delete && <div className="loader"><ClipLoader></ClipLoader> </div>}
    <div>
        <div className="container">
            <div className="list-container">
                <div className="list-header">
                    <div className="head">Reg No</div>
                    <div className="head">Name</div>
                    <div className="head">Course</div>
                    <div className="head">Year</div>
                    <div className="head">Edits</div>
                </div>
                
                {
                    students.map((obj, index)=>{
                        return  <div className="lists" key={index}>
                        <div className="title">{obj.data().regNo}</div>
                        <div className="title">{obj.data().name}</div>
                        <div className="title">{obj.data().course}</div>
                        <div className="title">{obj.data().year}</div>
                        <div className="title buttons">
                            <Link to='/admin/edit-student' state={{obj:obj.data()}}><div className="list-icon"><FontAwesomeIcon icon="pen"/></div></Link>
                            <div className="list-icon" onClick={()=>deleteItem(obj.data().regNo)}><FontAwesomeIcon icon="trash"/></div>
            
                        </div>
                    </div>
                    })
                }
        
            </div>
            <div className="button">
            <Link className='links' to="/admin/add-student"><button className="add-button">Add Student</button></Link>
            </div>
        </div>
    </div>
    </Fragment>
  )
}

export default Student