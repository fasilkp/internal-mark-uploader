import React from 'react';
import Admin from './pages/Admin Pages/admin/Admin';
import './assets/FontAwsesomeIcons/'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Admin Pages/Login/Login';
function App() {

  return (
    <Router>
        <div className="App">
          <Routes>
          <Route path={"/admin"} element={<Admin tag="Course"/>}/>
          <Route path={"/admin/login"} element={<Login/>}/>
          <Route path={"/admin/student"} element={<Admin tag="Student"/>}/>
          <Route path={"/admin/teacher"} element={<Admin tag="Teachers"/>}/>
          <Route path={"/admin/add-student"} element={<Admin tag="AddStudent"/>}/>
          <Route path={"/admin/edit-student"} element={<Admin tag="EditStudent"/>}/>
          <Route path={"/admin/add-course"} element={<Admin tag="AddCourse"/>}/>
          <Route path={"/admin/edit-course"} element={<Admin tag="EditCourse"/>}/>
          <Route path={"/admin/add-teacher"} element={<Admin tag="AddTeacher"/>}/>
          <Route path={"/admin/edit-teacher"} element={<Admin tag="EditTeacher"/>}/>
        </Routes>
        </div>
     
    </Router>
    
  );
}

export default App;
