import React from 'react'
import { Fragment } from 'react/cjs/react.development'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../common styles/containerStyles.css"
import "./AddCourse.css"

function AddCourse() {
  return (
      <Fragment>
    <div className="text">Add Course</div>
    <div className="main">
    <div className="form-container">
        <form>
            <div className="mb-3"><h4 className="container-header">Add Course Details</h4></div>
            <div className="mb-3">
              <label for="name" className="form-label">Course Name</label>
              <input type="text" className="form-control" id="name" placeholder='Enter Student Name' />
            </div>
            <div className="mb-3">
              <label className="form-label">Sem 1</label>
              <div class="input-group mb-3">
                  <input type="text" class="form-control add-subject-input" placeholder="Enter sem 1 Subjects" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <button class="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
            </div>
                <ul class="list-group">
                  <li class="list-group-item">An item <div className="list-icon list-icons"><FontAwesomeIcon className='penIcon' icon="trash"/></div></li>
                  <li class="list-group-item">An item <div className="list-icon list-icons" ><FontAwesomeIcon className='penIcon' icon="trash"/></div></li>
                  <li class="list-group-item">An item <div className="list-icon list-icons"><FontAwesomeIcon className='penIcon' icon="trash"/></div></li>
                  <li class="list-group-item">An item <div className="list-icon list-icons"><FontAwesomeIcon className='penIcon' icon="trash"/></div></li>
                </ul>
            </div>
            <div className="mb-3">
              <label className="form-label">Sem 2</label>
              <div class="input-group mb-3">
                  <input type="text" class="form-control add-subject-input" placeholder="Enter sem 2 Subjects" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <button class="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
            </div>
                <ul class="list-group">
                  
                </ul>
            </div>
            <div className="mb-3">
              <label className="form-label">Sem 3</label>
              <div class="input-group mb-3">
                  <input type="text" class="form-control add-subject-input" placeholder="Enter sem 3 Subjects" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <button class="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
            </div>
                <ul class="list-group">
                  
                </ul>
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

export default AddCourse