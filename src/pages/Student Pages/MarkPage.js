import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
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