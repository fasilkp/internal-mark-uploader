import React from 'react'
import { Fragment } from 'react/cjs/react.development'
import "../../common styles/containerStyles.css"

function EditStudent() {
  return (
      <Fragment>
    <div className="text">Edit Student</div>
    <div className="main">
    <div className="form-container">
        <form>
        <div className="mb-3"><h4 className="container-header">Edit Student Details</h4></div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Student Name</label>
              <input type="text" value="Fasil" className="form-control" id="exampleInputEmail1" placeholder='Enter Student Name' />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Register No</label>
              <input type="text" value="MSATSCS021" className="form-control" id="exampleInputEmail1" placeholder='Enter Register No' />
            </div>
            
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Course</label>
                <select className="form-select" value='2' aria-label="Default select example">
                <option selected  disabled>Select course</option>
                <option value="1">BCA</option>
                <option value="2">BSc Computer Science</option>
                <option value="3">BBA</option>
                </select>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Current Sem</label>
                <select className="form-select" value="6" aria-label="Default select example">
                <option selected>Select current sem</option>
                <option value="1">First</option>
                <option value="2">Second</option>
                <option value="3">Third</option>
                <option value="4">Fourth</option>
                <option value="5">Fifth</option>
                <option value="6">Sixth</option>
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

export default EditStudent