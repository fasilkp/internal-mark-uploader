import React from 'react';
import { Fragment } from 'react/cjs/react.development';
import "../../common styles/Login.css"
function StudentLogin() {
  return (
    <Fragment>
    <div className='row admin-login'>
        <h3 className="login-main-header">Login Into Internal Mark Uploader</h3>
        <div className="form-container">
        <form>
        <div className="mb-3"><h4 className="container-header"><span>Login</span></h4></div>
        <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Register No</label>
                  <input type="text" class="form-control" placeholder='Enter Your Reg No' id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Sem</label>
                <select className="form-select" aria-label="Default select example">
                <option selected>Select sem</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </select>
            </div>
        <div class="mb-3">
            <button className="login-btn">Login</button>  
        </div>    
          </form>
    </div>
    </div>
    </Fragment>
  )
}

export default StudentLogin