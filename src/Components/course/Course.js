import React from 'react'
import '../../common styles/listStyle.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.development';
function Course() {
  return (
    <Fragment>
    <div className="text">Courses</div>
    <div>
        <div className="container">
            <div className="list-container">
                <div className="list-header">
                    <div className="head">SL.No</div>
                    <div className="head">Courses</div>
                    <div className="head">Edits</div>
                </div>
                <div className="lists">
                    <div className="title">1</div>
                    <div className="title">BSc Computer Science</div>
                    <div className="title buttons">
                        <div className="list-icon"><FontAwesomeIcon icon="pen"/></div>
                        <div className="list-icon"><FontAwesomeIcon icon="trash"/></div>
        
                    </div>
                </div>
                <div className="lists">
                    <div className="title">2</div>
                    <div className="title">BSc Computer Science</div>
                    <div className="title buttons">
                        <div className="list-icon"><FontAwesomeIcon icon="pen"/></div>
                        <div className="list-icon"><FontAwesomeIcon icon="trash"/></div>
        
                    </div>
                </div>
                <div className="lists">
                    <div className="title">3</div>
                    <div className="title">BSc Computer Science</div>
                    <div className="title buttons">
                        <div className="list-icon"><FontAwesomeIcon icon="pen"/></div>
                        <div className="list-icon"><FontAwesomeIcon icon="trash"/></div>
        
                    </div>
                </div>
                <div className="lists">
                    <div className="title">4</div>
                    <div className="title">BSc Computer Science</div>
                    <div className="title buttons">
                        <div className="list-icon"><FontAwesomeIcon icon="pen"/></div>
                        <div className="list-icon"><FontAwesomeIcon icon="trash"/></div>
        
                    </div>
                </div>
                <div className="lists">
                    <div className="title">5</div>
                    <div className="title">BSc Computer Science</div>
                    <div className="title buttons">
                        <div className="list-icon"><FontAwesomeIcon icon="pen"/></div>
                        <div className="list-icon"><FontAwesomeIcon icon="trash"/></div>
        
                    </div>
                </div>
                <div className="lists">
                    <div className="title">5</div>
                    <div className="title">BSc Computer Science</div>
                    <div className="title buttons">
                        <div className="list-icon"><FontAwesomeIcon icon="pen"/></div>
                        <div className="list-icon"><FontAwesomeIcon icon="trash"/></div>
        
                    </div>
                </div>
                <div className="lists">
                    <div className="title">5</div>
                    <div className="title">BSc Computer Science</div>
                    <div className="title buttons">
                        <div className="list-icon"><FontAwesomeIcon icon="pen"/></div>
                        <div className="list-icon"><FontAwesomeIcon icon="trash"/></div>
        
                    </div>
                </div>
                <div className="lists">
                    <div className="title">5</div>
                    <div className="title">BSc Computer Science</div>
                    <div className="title buttons">
                        <div className="list-icon"><FontAwesomeIcon icon="pen"/></div>
                        <div className="list-icon"><FontAwesomeIcon icon="trash"/></div>
        
                    </div>
                </div>
                <div className="lists">
                    <div className="title">5</div>
                    <div className="title">BSc Computer Science</div>
                    <div className="title buttons">
                        <div className="list-icon"><FontAwesomeIcon icon="pen"/></div>
                        <div className="list-icon"><FontAwesomeIcon icon="trash"/></div>
        
                    </div>
                </div>

            </div>
            <div className="button">
            <Link className='links'to="/admin/add-course"><button className="add-button">Add Student</button></Link>
            </div>
        </div>
    </div>
    </Fragment>
  )
}

export default Course