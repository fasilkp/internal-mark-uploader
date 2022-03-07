import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import "../../common styles/Login.css"
import {Link} from "react-router-dom"

function TeacherLogin() {
  return (
    <Fragment>
  <div className='row admin-login'>
      <div className="form-container login">
      <form>
      <div className="mb-3"><h4 className="container-header"><span>Login</span></h4></div>
      <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" placeholder='Enter Your Email' id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" placeholder='Enter Your Password' class="form-control" id="exampleInputPassword1"/>
      </div>
      <div class="mb-3">
          <button className="login-btn">Login</button>  
      </div>    
        </form>
  </div>
  <Link to="/" className='links'><div className="login-another"><span>Login as student</span></div></Link>
  </div>
  </Fragment>
  )
}

export default TeacherLogin