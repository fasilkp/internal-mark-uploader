import React, {useState,useContext} from "react";
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
import UploadStudentDetails from "../../../Components/UploadStudentDetails/UploadStudentDetails";
import { Link} from "react-router-dom";
import { signOut} from "firebase/auth";
import ConfirmationMessage from "../../../Components/confirmationMessage/ConfirmationMessage";
import { auth,AdminId } from "../../../config/firebase";
import { AuthContext } from "../../../Context/Context";
import AlertBox from "../../../Components/AlertBox/AlertBox";
import UploadTeacherDetails from "../../../Components/UploadTeacherDetails/UploadTeacherDetails";


const components = {
  Course,
  Student,
  Teachers,
  AddStudent,
  EditStudent,
  AddCourse,
  AddTeacher,
  EditTeacher,
  EditCourse,
  UploadStudentDetails,
  UploadTeacherDetails
};

function Admin(props) {
  // const {user}=useContext(AuthContext)
  //const [user,loading, error]=useAuthState(auth)
  const {user}=useContext(AuthContext)
  const [confirmatioPopup,setConfirmationPopup]=useState(false)
  const [alertPopup,setAlertPopup]=useState({status:false, message:"SuccessFull",icon:'circle-exclamation'})
  const handleSignOut=async()=>{
    setConfirmationPopup(false)
    await signOut(auth)
    setAlertPopup({message:"SuccessFully Signed Out", status:true}) 
  }
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
          {(user && user.uid==AdminId) ?<li className="profile" onClick={()=>setConfirmationPopup(true)}>
            <div className="profile-details">
            <FontAwesomeIcon icon="user" className="icons user" />
              <div className="name_job">
                <div className="name">Sign Out</div>
              </div>
            </div>
            <i className="bx bx-log-out" id="log_out"></i>
          </li> : ""}
        </ul>
      </div>
      <section className="home-section">
        {(user && user.uid==AdminId) ? <TagName/> : <div className="login-container">
          <h6>Please Login</h6>
          <Link to="/admin/login" className="login-btn">Login</Link>
          </div> }
      </section>
      {confirmatioPopup && <ConfirmationMessage 
      message="Do You Want To Sign Out ?"
      setPopup={()=>setConfirmationPopup(false)}
      handleFunction={handleSignOut}  />}
      {alertPopup.status && <AlertBox
      message={alertPopup.message}
      setPopup={()=>setAlertPopup({...alertPopup, status:false})}
      icon={alertPopup.icon} 
        />}
      
    </div>
  );
}

export default Admin;
