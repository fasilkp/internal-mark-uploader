import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import TeacherLogin from '../../Components/TeacherLogin/TeacherLogin'
import Header from '../../Components/Header/Header'
function TeacherLoginPage() {
  return (
    <Fragment>
      <Header header="Teacher Login"/>
      <TeacherLogin/>
    </Fragment>
  )
}

export default TeacherLoginPage