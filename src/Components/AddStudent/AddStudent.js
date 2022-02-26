import React from 'react'
import { Fragment } from 'react/cjs/react.development'
import "../../common styles/containerStyles.css"

function AddStudent() {
  return (
      <Fragment>
    <div className="text">Add Student</div>
    <div className="main">
    <div className="form-container">
        <form>
            <div className="mb-3"><h4 className="container-header">Add Student Details</h4></div>
            <div className="mb-3">
              <label for="name" className="form-label">Student Name</label>
              <input type="text" className="form-control" id="name" placeholder='Enter Student Name' />
            </div>
            <div className="mb-3">
              <label for="reg" className="form-label">Register No</label>
              <input type="text" className="form-control" id="reg" placeholder='Enter Register No' />
            </div>
            
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Course</label>
                <select className="form-select" aria-label="Default select example">
                <option selected disabled>Select course</option>
                <option value="1">BCA</option>
                <option value="2">BSc Computer Science</option>
                <option value="3">BBA</option>
                </select>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Current Sem</label>
                <select className="form-select" aria-label="Default select example">
                <option selected>Select current sem</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </select>
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

export default AddStudent