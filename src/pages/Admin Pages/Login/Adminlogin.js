import React,{Fragment} from 'react'
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