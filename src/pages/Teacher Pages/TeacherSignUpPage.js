import React,{ Fragment } from 'react'
import TeacherSignUp from '../../Components/TeacherSignUp/TeacherSignUp'
import Header from '../../Components/Header/Header'
function TeacherSignUpPage() {
  return (
    <Fragment>
      <Header header="Teacher Login"/>
      <TeacherSignUp/>
    </Fragment>
  )
}

export default TeacherSignUpPage