import React from 'react'
import '../style/Style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from 'react/cjs/react.development';
function Student() {
  return (
    <Fragment>
    <div className="text">Student</div>
    <div>
        <div className="container">
            <div className="list-container">
                <div className="list-header">
                    <div className="head">Admn No</div>
                    <div className="head">Name</div>
                    <div className="head">Course</div>
                    <div className="head">Edits</div>
                </div>
                <div className="lists">
                    <div className="title">1</div>
                    <div className="title">name </div>
                    <div className="title">BSc Computer Science</div>
                    <div className="title buttons">
                        <div className="list-icon"><FontAwesomeIcon icon="pen"/></div>
                        <div className="list-icon"><FontAwesomeIcon icon="trash"/></div>
        
                    </div>
                </div>
                <div className="lists">
                    <div className="title">1</div>
                    <div className="title">name </div>
                    <div className="title">BSc Computer Science</div>
                    <div className="title buttons">
                        <div className="list-icon"><FontAwesomeIcon icon="pen"/></div>
                        <div className="list-icon"><FontAwesomeIcon icon="trash"/></div>
        
                    </div>
                </div>
                <div className="lists">
                    <div className="title">1</div>
                    <div className="title">name </div>
                    <div className="title">BSc Computer Science</div>
                    <div className="title buttons">
                        <div className="list-icon"><FontAwesomeIcon icon="pen"/></div>
                        <div className="list-icon"><FontAwesomeIcon icon="trash"/></div>
        
                    </div>
                </div>
                <div className="lists">
                    <div className="title">1</div>
                    <div className="title">name </div>
                    <div className="title">BSc Computer Science</div>
                    <div className="title buttons">
                        <div className="list-icon"><FontAwesomeIcon icon="pen"/></div>
                        <div className="list-icon"><FontAwesomeIcon icon="trash"/></div>
        
                    </div>
                </div>
                <div className="lists">
                    <div className="title">1</div>
                    <div className="title">name </div>
                    <div className="title">BSc Computer Science</div>
                    <div className="title buttons">
                        <div className="list-icon"><FontAwesomeIcon icon="pen"/></div>
                        <div className="list-icon"><FontAwesomeIcon icon="trash"/></div>
        
                    </div>
                </div>
                <div className="lists">
                    <div className="title">1</div>
                    <div className="title">name </div>
                    <div className="title">BSc Computer Science</div>
                    <div className="title buttons">
                        <div className="list-icon"><FontAwesomeIcon icon="pen"/></div>
                        <div className="list-icon"><FontAwesomeIcon icon="trash"/></div>
        
                    </div>
                </div>
                

            </div>
            <div className="button">
                <button className="add-button">Add Courses</button>
            </div>
        </div>
    </div>
    </Fragment>
  )
}

export default Student