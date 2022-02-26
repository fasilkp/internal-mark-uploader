import React from 'react'
import { Fragment } from 'react/cjs/react.development'
import "../../common styles/containerStyles.css"

function EditTeacher() {
  return (
      <Fragment>
    <div className="text">Add Teacher</div>
    <div className="main">
    <div className="form-container">
        <form>
            <div className="mb-3"><h4 className="container-header">Enter Teacher Details</h4></div>
            <div className="mb-3">
              <label for="name" className="form-label">Teacher Name</label>
              <input type="text" className="form-control" id="name" placeholder='Enter Student Name' />
            </div>
            <div className="mb-3">
              <label for="reg" className="form-label">Register No</label>
              <input type="text" className="form-control" id="reg" placeholder='Enter Register No' />
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder='Enter Email Id' />
            </div>
          
            <div className="btn">
                <button type="reset" className="btn btn-danger">reset</button>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
    </div>
</div>
</Fragment>
  )
}

export default EditTeacher