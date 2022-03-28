import React , {Fragment}from 'react'
import StudentMarkView from '../../Components/StudentMarkView/StudentMarkView'
import Header from '../../Components/Header/Header'

function TeacherViewPage() {
  return (
    <Fragment>
      <Header header="Teacher Panel"></Header>
      <StudentMarkView/>
    </Fragment>
    
  )
}

export default TeacherViewPage