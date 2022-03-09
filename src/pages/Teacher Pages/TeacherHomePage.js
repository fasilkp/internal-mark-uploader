import React from 'react'
import TeacherHome from '../../Components/TeacherHome/TeacherHome'
import { Fragment } from 'react/cjs/react.production.min'
import Header from "../../Components/Header/Header"
function TeacherHomePage() {
  return (
    <Fragment>
        <Header header="Teacher Panel" />
        <TeacherHome/>
    </Fragment>
  )
}

export default TeacherHomePage