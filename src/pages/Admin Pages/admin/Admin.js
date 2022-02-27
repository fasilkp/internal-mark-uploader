import React, {useState} from "react";
import "./Admin.css";
import Course from "../../../Components/course/Course"
import Teachers from "../../../Components/teachers/Teachers"
import Student from "../../../Components/student/Student"
import AddStudent from "../../../Components/AddStudent/AddStudent";
import EditStudent from "../../../Components/EditStudent/EditStudent";
import AddCourse from "../../../Components/AddCourse/AddCourse";
import AddTeacher from "../../../Components/AddTeacher/AddTeacher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditTeacher from "../../../Components/EditTeacher/EditTeacher";
import EditCourse from "../../../Components/EditCourse/EditCourse";
import { Link } from "react-router-dom";

const components = {
  Course,
  Student,
  Teachers,
  AddStudent,
  EditStudent,
  AddCourse,
  AddTeacher,
  EditTeacher,
  EditCourse
};

function Admin(props) {
  const TagName = components[props.tag];
  const [sideBarOpened, setSideBarOpened]=useState(false)
  const obj={
      courses:false,
      Students:false,
      teachers:false 
  }
  const [clicked, setClicked]=useState(obj) 
  return (
    <div>
      <div className={sideBarOpened?"sidebar open" : "sidebar"}>
        <div className="logo-details">
          {sideBarOpened?<div className="logo_name">Internal Mark Uploader</div>:""}
          <i className={sideBarOpened?"bx bx-menu-alt-right" : "bx bx-menu"} id="btn" onClick={()=>setSideBarOpened(!sideBarOpened)}></i>
        </div>
        <ul className="nav-list">
          <li onClick={()=>{setClicked({...obj, courses:true})}} className={clicked.courses ? "menuClicked" : ""}>
            <Link className="links" to="/admin">
              <div className="a">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Courses</span>
            </div>
            </Link>
            <span className="tooltip">Courses</span>
          </li>
          <li onClick={()=>{setClicked({...obj, Students:true})}} className={clicked.Students ? "menuClicked" : ""}>
          <Link className="links" to="/admin/student">
            <div className="a">
              <i> <FontAwesomeIcon icon="user-graduate" className="icons" /></i>
              <span className="links_name">Students</span>
            </div> 
          </Link>
            <span className="tooltip">Students</span>
          </li>
          <li onClick={()=>{setClicked({...obj, teachers:true})}} className={clicked.teachers ? "menuClicked" : ""}>
          <Link className="links" to="/admin/teacher">
            <div className="a">
            <i> <FontAwesomeIcon icon="chalkboard-teacher" className="icons" /></i>
              <span className="links_name">Teachers</span>
            </div>
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
