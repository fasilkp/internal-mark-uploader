import React from 'react'
import SelectDetails from '../../Components/SelectDetails/SelectDetails'
import { Fragment } from 'react/cjs/react.production.min'
import TeacherHeader from '../../Components/TeacherHeader/TeacherHeader'
function SelectDetailsPage() {
  return (
    <Fragment>
      <TeacherHeader></TeacherHeader>
      <SelectDetails/>
    </Fragment>
  )
}

export default SelectDetailsPage