import React,{useContext,Fragment} from 'react'
import TeacherHeader from '../../Components/TeacherHeader/TeacherHeader'
import UploadMark from '../../Components/UploadMark/UploadMark'
import { AdminId } from '../../config/firebase'
import { AuthContext } from '../../Context/Context'
import Loading from '../../Components/Loading/Loading'
function UploadMarkPage() {
  const {user}=useContext(AuthContext)
  return (
    <Fragment>
      {user && user.uid !== AdminId ? <div>
        <TeacherHeader showUser={false}></TeacherHeader>
        <UploadMark></UploadMark>
      </div>:<Loading path="teacher"/>}
    </Fragment>
  )
}

export default UploadMarkPage