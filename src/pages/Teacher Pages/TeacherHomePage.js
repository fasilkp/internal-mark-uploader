import React,{useContext,Fragment} from 'react'
import TeacherHome from '../../Components/TeacherHome/TeacherHome'
import TeacherHeader from '../../Components/TeacherHeader/TeacherHeader'
import { AdminId } from '../../config/firebase'
import { AuthContext } from '../../Context/Context'
import Loading from '../../Components/Loading/Loading'
function TeacherHomePage() {
  const {user}=useContext(AuthContext)
  return (
    <Fragment>
      {user && user.uid !== AdminId ? <div>
        <TeacherHeader showUser={true}/>
        <TeacherHome/>
      </div> : <Loading path="teacher"/>}
    </Fragment>
  )
}

export default TeacherHomePage