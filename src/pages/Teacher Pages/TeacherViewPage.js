import React , {Fragment,useContext}from 'react'
import StudentMarkView from '../../Components/StudentMarkView/StudentMarkView'
import TeacherHeader from '../../Components/TeacherHeader/TeacherHeader'
import TeacherLoginPage from './TeacherLoginPage'
import { AdminId } from '../../config/firebase'
import { AuthContext } from '../../Context/Context'
function TeacherViewPage() {
  const {user}=useContext(AuthContext)
  return (
    <Fragment>
      {user && user.uid !== AdminId ? <dir>
      <TeacherHeader></TeacherHeader>
      <StudentMarkView/>
      </dir>:<TeacherLoginPage/>}
    </Fragment>
    
  )
}

export default TeacherViewPage