import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import AdminLogin from '../../../Components/AdminLogin/AdminLogin'
import Header from '../../../Components/Header/Header'
function Login() {
  return (
    <Fragment>
      <Header header="Admin Login"/>
      <AdminLogin/>
    </Fragment>
  )
}

export default Login