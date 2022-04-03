import React,{useContext} from 'react'
import TeacherHeader from '../../Components/TeacherHeader/TeacherHeader'
import { Fragment } from 'react/cjs/react.production.min'
import UploadMark from '../../Components/UploadMark/UploadMark'
import { AdminId } from '../../config/firebase'
import { AuthContext } from '../../Context/Context'
import TeacherLoginPage from './TeacherLoginPage'
function UploadMarkPage() {
  const {user}=useContext(AuthContext)
  return (
    <Fragment>
      {user && user.uid !== AdminId ? <div>
        <TeacherHeader></TeacherHeader>
        <UploadMark></UploadMark>
      </div>:<TeacherLoginPage/>}
    </Fragment>
  )
}

export default UploadMarkPage