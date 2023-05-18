import React,{ Fragment } from 'react'
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