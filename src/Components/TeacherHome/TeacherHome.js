import React from 'react'
import "./TeacherHome.css"
import upload from "../../assets/images/upload.png"
import view from "../../assets/images/view.png"
import edit from "../../assets/images/edit.png"
import { Link } from 'react-router-dom'
function TeacherHome() {
  return (
    <div className="main home">
        <div className="header">
            <span>Upload, View and Edit</span>
            <span>Internal Marks</span>
        </div>
        <div className="boxes">
            <Link to='/teacher/select-details' className='links'>
            <div className="box">
                <div className="box-image"><img src={upload} alt="" /></div>
                <div className="disc">
                    <span className="box-head">Upload</span>
                    <span className="box-disc">Upload Internal Marks</span>
                    <div className="box-btn"><button className="box-btn">&gt;</button></div>
                </div>
            </div>
            </Link>
            <div className="box">
                <div className="box-image"><img src={view} alt="" /></div>
                <div className="disc">
                    <span className="box-head">View</span>
                    <span className="box-disc">View Internal Marks</span>
                    <div className="box-btn"><button className="box-btn">&gt;</button></div>
                </div>
            </div>
            <div className="box">
                <div className="box-image"><img src={edit} alt="" /></div>
                <div className="disc">
                    <span className="box-head">Edit</span>
                    <span className="box-disc">Edit Internal Marks</span>
                    <div className="box-btn"><button className="box-btn">&gt;</button></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeacherHome