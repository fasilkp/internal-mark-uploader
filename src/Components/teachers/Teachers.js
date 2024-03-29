import React, {useEffect, useState,Fragment} from 'react'
import '../../common styles/listStyle.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom"
import db from "../../config/firebase"
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore"
import {ClipLoader} from "react-spinners"
function Teachers() {
    const [teachers, setTeachers]=useState([])
    const [load,setLoad]=useState(true)
    useEffect(()=>{
        onSnapshot(collection(db, "teachers"),(snapshot)=>{
          setTeachers(snapshot.docs);
          setLoad(false)
        });
      },[])
    const deleteItem=async (id)=>{
        setLoad(true)
         if(window.confirm("Are you sure ? you want to delete this record")){
            await deleteDoc(doc(db, "teachers", id)).then(()=>{
                console.log("deleted");
                setLoad(false)
            })
        }
        else{
            console.log("canceled");
        }
    }
  return (
    <Fragment>
    <div className="text">Teachers</div>
    {load && <div className="loader"><ClipLoader/></div>}
    <div>
        <div className="container"> 
            <div className="list-container">
                <div className="list-header">
                    <div className="head">Reg No</div>
                    <div className="head">Secret Code</div>
                    <div className="head">Name</div>
                    <div className="head">Email</div>
                    <div className="head">Edits</div>
                </div>
                {
                    teachers.map((obj,index)=>{
                        return <div className="lists" key={index}>
                        <div className="title">{obj.data().regNo}</div>
                        <div className="title">{obj.data().secretCode && obj.data().secretCode}</div>
                        <div className="title">{obj.data().name}</div>
                        <div className="title">{obj.data().email}</div>
                        <div className="title buttons">
                            <Link to="/admin/edit-teacher" state={{obj:obj.data()}}><div className="list-icon"><FontAwesomeIcon icon="pen"/></div></Link>
                            <div className="list-icon" onClick={()=>deleteItem(obj.data().regNo)}><FontAwesomeIcon icon="trash"/></div>
            
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