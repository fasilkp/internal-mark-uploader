import React from 'react';
import Admin from './pages/Admin Pages/admin/Admin';
import './assets/FontAwsesomeIcons/'
import './App.css';
import Adminlogin from './pages/Admin Pages/Login/Adminlogin';
import TeacherHomePage from './pages/Teacher Pages/TeacherHomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentLoginPage from './pages/Student Pages/StudentLoginPage';
import MarkPage from './pages/Student Pages/MarkPage';
import SelectDetailsPage from './pages/Teacher Pages/SelectDetailsPage';
import TeacherLoginPage from './pages/Teacher Pages/TeacherLoginPage';
import UploadMarkPage from './pages/Teacher Pages/UploadMarkPage';
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

          {/* TEACHER PAGES */}

          <Route path={"/teacher/login"} element={<TeacherLoginPage/>}/>
          <Route path={"/teacher/home"} element={<TeacherHomePage/>}/>
          <Route path={"/teacher/select-details"} element={<SelectDetailsPage/>}/>
          <Route path={"/teacher/upload-mark"} element={<UploadMarkPage/>}/>

          {/* Student PAGES */}

          <Route path={"student/login"} element={<StudentLoginPage/>}/>
          <Route path={"student/display-mark"} element={<MarkPage/>}/>
          
        </Routes>
        </div>
     
    </Router>
    
  );
}

export default App;
