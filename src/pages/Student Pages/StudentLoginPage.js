import React,{Fragment} from 'react'
import Header from '../../Components/Header/Header'
import StudentLogin from '../../Components/StudentLogin/StudentLogin'
function StudentLoginPage() {
  return (
    <Fragment>
        <Header header="Student Marks"></Header>
        <StudentLogin/>
    </Fragment>
  )
}

export default StudentLoginPage