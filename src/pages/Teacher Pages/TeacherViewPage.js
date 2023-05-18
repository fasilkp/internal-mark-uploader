import React , {Fragment,useContext}from 'react'
import StudentMarkView from '../../Components/StudentMarkView/StudentMarkView'
import TeacherHeader from '../../Components/TeacherHeader/TeacherHeader'
import Loading from '../../Components/Loading/Loading'
import { AdminId } from '../../config/firebase'
import { AuthContext } from '../../Context/Context'
function TeacherViewPage() {
  const {user}=useContext(AuthContext)
  return (
    <Fragment>
      {user && user.uid !== AdminId ? <dir>
      <TeacherHeader showUser={false}></TeacherHeader>
      <StudentMarkView/>
      </dir>:<Loading path="teacher"/>}
    </Fragment>
    
  )
}

export default TeacherViewPage