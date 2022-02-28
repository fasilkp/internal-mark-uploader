import React from 'react';
import Admin from './pages/Admin Pages/admin/Admin';
import './assets/FontAwsesomeIcons/'
import './App.css';
import Teacherlogin from './pages/Teacher Pages/Teacherlogin';
import Adminlogin from './pages/Admin Pages/Login/Adminlogin';
import Studentlogin from './pages/Student Pages/Studentlogin';
import Mark from './pages/Student Pages/Mark';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return (
    <Router>
        <div className="App">
          <Routes>
          {/* ADMIN PAGES */}
          <Route path={"/admin"} element={<Admin tag="Course"/>}/>
          <Route path={"/admin/login"} element={<Adminlogin/>}/>
          <Route path={"/admin/student"} element={<Admin tag="Student"/>}/>
          <Route path={"/admin/teacher"} element={<Admin tag="Teachers"/>}/>
          <Route path={"/admin/add-student"} element={<Admin tag="AddStudent"/>}/>
          <Route path={"/admin/edit-student"} element={<Admin tag="EditStudent"/>}/>
          <Route path={"/admin/add-course"} element={<Admin tag="AddCourse"/>}/>
          <Route path={"/admin/edit-course"} element={<Admin tag="EditCourse"/>}/>
          <Route path={"/admin/add-teacher"} element={<Admin tag="AddTeacher"/>}/>
          <Route path={"/admin/edit-teacher"} element={<Admin tag="EditTeacher"/>}/>

          {/* ADMIN PAGES */}

          <Route path={"/teacher/login"} element={<Teacherlogin/>}/>
          {/* Student PAGES */}

          <Route path={"student/login"} element={<Studentlogin/>}/>
          <Route path={"student/display-mark"} element={<Mark/>}/>
          
        </Routes>
        </div>
     
    </Router>
    
  );
}

export default App;
