import React,{Fragment,useContext} from 'react'
import SelectDetails from '../../Components/SelectDetails/SelectDetails'
import TeacherHeader from '../../Components/TeacherHeader/TeacherHeader'
import { AdminId } from '../../config/firebase'
import { AuthContext } from '../../Context/Context'
import TeacherLoginPage from './TeacherLoginPage'

function SelectDetailsPage() {
  const {user}=useContext(AuthContext)
  return (
    <Fragment>
      {user && user.uid !== AdminId ? <div>
      <TeacherHeader></TeacherHeader>
      <SelectDetails/>
      </div>:<TeacherLoginPage/>}  
    </Fragment>
  )
}

export default SelectDetailsPage