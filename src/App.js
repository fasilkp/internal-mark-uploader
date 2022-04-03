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
import TeacherViewPage from './pages/Teacher Pages/TeacherViewPage';
import StudentMarkView from './Components/StudentMarkView/StudentMarkView';
import EditInternalPage from './pages/Teacher Pages/EditInternalPage';
import { useEffect,useContext } from 'react';
import {AuthContext} from './Context/Context'
import { auth } from './config/firebase';
import {onAuthStateChanged,} from 'firebase/auth'
import ConfirmationMessage from './Components/confirmationMessage/ConfirmationMessage';
import AlertBox from './Components/AlertBox/AlertBox';
import db from './config/firebase'
import { getDoc,doc } from 'firebase/firestore';
import TeacherSignUpPage from './pages/Teacher Pages/TeacherSignUpPage';
import Test from './Components/Test/Test';
import DownloadMark from './Components/DownloadMark/DownloadMark';
function App() {
  const {user, setUser}=useContext(AuthContext)
  useEffect(()=>{
    onAuthStateChanged(auth, async(currentUser)=>{
      setUser(currentUser)
    })
  },[])
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
          <Route path={"/admin/student-details-upload"} element={<Admin tag="UploadStudentDetails"/>}/>
          <Route path={"/admin/teacher-details-upload"} element={<Admin tag="UploadTeacherDetails"/>}/>
          <Route path={"/admin/check"} element={<AlertBox message="successfull"/>}/>

          {/* TEACHER PAGES */}

          <Route path={"/teacher/login"} element={<TeacherLoginPage/>}/>
          <Route path={"/teacher/signup"} element={<TeacherSignUpPage/>}/>
          <Route path={"/teacher"} element={<TeacherHomePage/>}/>
          <Route path={"/teacher/select-details/:urlPath"} element={<SelectDetailsPage/>}/>
          <Route path={"/teacher/upload-mark"} element={<UploadMarkPage/>}/>
          <Route path={"/teacher/teacher-view"} element={<TeacherViewPage/>}/>
          <Route path={"/teacher/edit-internal"} element={<EditInternalPage/>}/>
          <Route path={"/teacher/view-internal"} element={<TeacherViewPage/>}/>
          <Route path={"/test"} element={<Test/>}/>
          <Route path={"/mark/:sem/:subject/:course/:year"} element={<DownloadMark/>}/>
          

          {/* Student PAGES */}

          <Route path={"/"} element={<StudentLoginPage/>}/>
          <Route path={"student/display-mark"} element={<MarkPage/>}/>
          
        </Routes>
        </div>
     
    </Router>
    
  );
}

export default App;
