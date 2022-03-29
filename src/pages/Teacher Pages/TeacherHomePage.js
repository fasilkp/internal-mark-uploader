import React from 'react'
import TeacherHome from '../../Components/TeacherHome/TeacherHome'
import { Fragment } from 'react/cjs/react.production.min'
import TeacherHeader from '../../Components/TeacherHeader/TeacherHeader'
function TeacherHomePage() {
  return (
    <Fragment>
        <TeacherHeader/>
        <TeacherHome/>
    </Fragment>
  )
}

export default TeacherHomePage