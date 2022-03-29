import React , {Fragment}from 'react'
import StudentMarkView from '../../Components/StudentMarkView/StudentMarkView'
import TeacherHeader from '../../Components/TeacherHeader/TeacherHeader'

function TeacherViewPage() {
  return (
    <Fragment>
      <TeacherHeader></TeacherHeader>
      <StudentMarkView/>
    </Fragment>
    
  )
}

export default TeacherViewPage