import React, {useState} from "react";
import "../admin/Admin.css";

function Admin() {
  const [sideBarStatus, setSideBarStatus]=useState(false)
  const obj={
      dashboard:false,
      user:false,
      message:false
  }
  const [clicked, setClicked]=useState(obj) 
  return (
    <div>
      <div className={sideBarStatus?"sidebar open" : "sidebar"}>
        <div className="logo-details">
          <div className="logo_name">Internal Mark Uploader</div>
          <i className={sideBarStatus?"bx bx-menu-alt-right" : "bx bx-menu"} id="btn" onClick={()=>setSideBarStatus(!sideBarStatus)}></i>
        </div>
        <ul className="nav-list">
          <li onClick={()=>{setClicked({...obj, dashboard:true})}} className={clicked.dashboard ? "menuClicked" : ""}>
            <a href="#">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Dashboard</span>
            </a>
            <span className="tooltip">Dashboard</span>
          </li>
          <li onClick={()=>{setClicked({...obj, user:true})}} className={clicked.user ? "menuClicked" : ""}>
            <a href="#">
              <i className="bx bx-user"></i>
              <span className="links_name">User</span>
            </a> 
            <span className="tooltip">User</span>
          </li>
          <li onClick={()=>{setClicked({...obj, message:true})}} className={clicked.message ? "menuClicked" : ""}>
            <a href="#">
              <i className="bx bx-chat"></i>
              <span className="links_name">Messages</span>
            </a>
            <span className="tooltip">Messages</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-pie-chart-alt-2"></i>
              <span className="links_name">Analytics</span>
            </a>
            <span className="tooltip">Analytics</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-folder"></i>
              <span className="links_name">File Manager</span>
            </a>
            <span className="tooltip">Files</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-cart-alt"></i>
              <span className="links_name">Order</span>
            </a>
            <span className="tooltip">Order</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-heart"></i>
              <span className="links_name">Saved</span>
            </a>
            <span className="tooltip">Saved</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-cog"></i>
              <span className="links_name">Setting</span>
            </a>
            <span className="tooltip">Setting</span>
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
        <div className="text">Courses</div>
        <div className="divBox">
          <div className="sub-boxes">Hello</div>
          <div className="sub-boxes">hai</div>
        </div>
      </section>
    </div>
  );
}

export default Admin;
