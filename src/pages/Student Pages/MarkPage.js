import React,{ Fragment } from 'react'
import Header from '../../Components/Header/Header'
import InternalDisplay from '../../Components/InternalDisplay/InternalDisplay'
function MarkPage() {
  return (
    <Fragment>
        <Header header="Internal Marks"/>
        <InternalDisplay/>
    </Fragment>
  )
}

export default MarkPage