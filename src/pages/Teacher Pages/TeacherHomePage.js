import React,{useContext,Fragment} from 'react'
import TeacherHome from '../../Components/TeacherHome/TeacherHome'
import TeacherHeader from '../../Components/TeacherHeader/TeacherHeader'
import { AdminId } from '../../config/firebase'
import { AuthContext } from '../../Context/Context'
import TeacherLoginPage from './TeacherLoginPage'
function TeacherHomePage() {
  const {user}=useContext(AuthContext)
  return (
    <Fragment>
      {user && user.uid !== AdminId ? <div>
        <TeacherHeader/>
        <TeacherHome/>
      </div> : <TeacherLoginPage/>}
    </Fragment>
  )
}

export default TeacherHomePage