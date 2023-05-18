import React,{Fragment,useContext} from 'react'
import EditInternal from '../../Components/EditInternal/EditInternal'
import TeacherHeader from '../../Components/TeacherHeader/TeacherHeader'
import { AdminId } from '../../config/firebase'
import { AuthContext } from '../../Context/Context'
import Loading from '../../Components/Loading/Loading'
function EditInternalPage() {
  const {user}=useContext(AuthContext)
  return (
    <Fragment>
      {user && user.uid !== AdminId ? <div>
      <TeacherHeader showUser={false}></TeacherHeader>
      <EditInternal/>
      </div>:<Loading path="teacher"/>}
    </Fragment>
    
  )
}

export default EditInternalPage