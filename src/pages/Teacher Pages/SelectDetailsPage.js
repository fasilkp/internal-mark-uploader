import React,{Fragment,useContext} from 'react'
import SelectDetails from '../../Components/SelectDetails/SelectDetails'
import TeacherHeader from '../../Components/TeacherHeader/TeacherHeader'
import { AdminId } from '../../config/firebase'
import { AuthContext } from '../../Context/Context'
import Loading from '../../Components/Loading/Loading'

function SelectDetailsPage() {
  const {user}=useContext(AuthContext)
  return (
    <Fragment>
      {user && user.uid !== AdminId ? <div>
      <TeacherHeader showUser={true}></TeacherHeader>
      <SelectDetails/>
      </div>:<Loading path="teacher"/>}  
    </Fragment>
  )
}

export default SelectDetailsPage