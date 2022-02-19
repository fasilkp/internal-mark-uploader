import React, {useState} from "react";
import "../admin/Admin.css";
import Course from "../course/Course";
import Student from "../student/Student";
import Teachers from "../teachers/Teachers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const components = {
  Course,
  Student,
  Teachers
};

function Admin(props) {
  const TagName = components[props.tag];
  const [sideBarStatus, setSideBarStatus]=useState(false)
  const obj={
      courses:false,
      Students:false,
      teachers:false
  }
  const [clicked, setClicked]=useState(obj) 
  return (
    <div>
      <div className={sideBarStatus?"sidebar open" : "sidebar"}>
        <div className="logo-details">
          {sideBarStatus?<div className="logo_name">Internal Mark Uploader</div>:""}
          <i className={sideBarStatus?"bx bx-menu-alt-right" : "bx bx-menu"} id="btn" onClick={()=>setSideBarStatus(!sideBarStatus)}></i>
        </div>
        <ul className="nav-list">
          <li onClick={()=>{setClicked({...obj, courses:true})}} className={clicked.courses ? "menuClicked" : ""}>
            <Link to="/">
              <a href="#">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Courses</span>
            </a>
            </Link>
            <span className="tooltip">Courses</span>
          </li>
          <li onClick={()=>{setClicked({...obj, Students:true})}} className={clicked.Students ? "menuClicked" : ""}>
          <Link to="/student">
            <a href="#">
              <i> <FontAwesomeIcon icon="user-graduate" className="icons" /></i>
              <span className="links_name">Students</span>
            </a> 
          </Link>
            <span className="tooltip">Students</span>
          </li>
          <li onClick={()=>{setClicked({...obj, teachers:true})}} className={clicked.teachers ? "menuClicked" : ""}>
          <Link to="/teachers">
            <a href="#">
            <i> <FontAwesomeIcon icon="chalkboard-teacher" className="icons" /></i>
              <span className="links_name">Teachers</span>
            </a>
            </Link>
            <span className="tooltip">Teachers</span>
          </li>
          <li className="profile">
            <div className="profile-details">
              <img src="profile.jpg"  />
              <div className="name_job">
                <div className="name">Prem Shahi</div>
                <div className="job">Tutor</div>
              </div>
            </div>
            <i className="bx bx-log-out" id="log_out"></i>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <TagName/>

      </section>
    </div>
  );
}

export default Admin;
