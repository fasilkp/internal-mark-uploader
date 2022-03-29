import React,{Fragment} from 'react'
import EditInternal from '../../Components/EditInternal/EditInternal'
import TeacherHeader from '../../Components/TeacherHeader/TeacherHeader'

function EditInternalPage() {
  return (
    <Fragment>
      <TeacherHeader></TeacherHeader>
      <EditInternal/>
    </Fragment>
    
  )
}

export default EditInternalPage