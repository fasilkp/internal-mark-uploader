import React from 'react'
import Header from '../../Components/Header/Header'
import { Fragment } from 'react/cjs/react.production.min'
import UploadMark from '../../Components/UploadMark/UploadMark'
function UploadMarkPage() {
  return (
    <Fragment>
        <Header header="Teacher Panel"></Header>
        <UploadMark></UploadMark>
    </Fragment>
  )
}

export default UploadMarkPage