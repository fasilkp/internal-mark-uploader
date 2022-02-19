import React from 'react';
import Admin from './pages/Admin Pages/admin/Admin';
import './assets/FontAwsesomeIcons/'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return (
    <Router>
        <div className="App">
          <Routes>
          <Route path={"/"} element={<Admin tag="Course"/>}/>
          <Route path={"/student"} element={<Admin tag="Student"/>}/>
          <Route path={"/teachers"} element={<Admin tag="Teachers"/>}/>
        </Routes>
        </div>
     
    </Router>
    
  );
}

export default App;
