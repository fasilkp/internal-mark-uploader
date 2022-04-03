import React,{Fragment,useContext} from 'react'
import EditInternal from '../../Components/EditInternal/EditInternal'
import TeacherHeader from '../../Components/TeacherHeader/TeacherHeader'
import { AdminId } from '../../config/firebase'
import { AuthContext } from '../../Context/Context'
import TeacherLoginPage from './TeacherLoginPage'
function EditInternalPage() {
  const {user}=useContext(AuthContext)
  return (
    <Fragment>
      {user && user.uid !== AdminId ? <div>
      <TeacherHeader></TeacherHeader>
      <EditInternal/>
      </div>:<TeacherLoginPage/>}
    </Fragment>
    
  )
}

export default EditInternalPage