import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
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