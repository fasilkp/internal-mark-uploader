import React, { useState,useContext } from "react";
import { AuthContext } from "../../Context/Context";
import db, { auth, AdminId } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import {signOut} from 'firebase/auth'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConfirmationMessage from "../confirmationMessage/ConfirmationMessage";
import "./TeacherHeader.css";
function TeacherHeader(props) {

  const {user,setUser}=useContext(AuthContext)
  const [confirmationPopup,setConfirmationPopup]=useState(false)
  const navigate = useNavigate();
  const handleSignOut=async()=>{
    await signOut(auth)
    setConfirmationPopup(false)}  
  return (
    <div className="headSection">
      <div>
        <h6>Teacher Panel</h6>
      </div>
      <div className="dropdown">
        <a className="btn btn-secondary dropdown-toggle" href="#" role="button"
        id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"><FontAwesomeIcon icon="user" /> &nbsp; &nbsp; {user &&   user.displayName }</a>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li><a className="dropdown-item" href="#" onClick={()=>setConfirmationPopup(true)}>Logout</a></li>
        </ul>
      </div>
      {confirmationPopup && <ConfirmationMessage 
      message="Do You Want To Sign Out ?"
      setPopup={()=>setConfirmationPopup(false)}
      handleFunction={handleSignOut}  />}
    </div>
  );
}

export default TeacherHeader;
