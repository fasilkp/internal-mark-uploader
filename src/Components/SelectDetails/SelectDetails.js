import React from 'react'
import "../../common styles/Login.css"
import "../SelectDetails/SelectDetails.css"

function SelectDetails() {
  return (
    <div className='row admin-login'>
        <div className="form-container">
        <form>
        <div className="mb-3"><h4 className="container-header"><span>Select Class Details</span></h4></div>
        <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Course</label>
                <select className="form-select" aria-label="Default select example">
                <option selected>Select Course</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </select>
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
        <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Subject</label>
                <select className="form-select" aria-label="Default select example">
                <option selected>Select Subject</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </select>
            </div>
        <div class="mb-3">
            <button className="btn">Enter</button>  
        </div>    
          </form>
    </div>
    </div>
  )
}

export default SelectDetails