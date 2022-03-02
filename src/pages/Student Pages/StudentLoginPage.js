import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import Header from '../../Components/Header/Header'
import StudentLogin from '../../Components/StudentLogin/StudentLogin'
function StudentLoginPage() {
  return (
    <Fragment>
        <Header header="Student Login"></Header>
        <StudentLogin/>
    </Fragment>
  )
}

export default StudentLoginPage