import React from 'react'
import './ConfirmationMessage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function ConfirmationMessage(props) {
  return (
    <div className='ConfirmationMessage'>
        <div className="confirmBox">
            <div className="icon"><FontAwesomeIcon className='logo' icon='circle-exclamation' /></div>
            <h5 className='message'>{props.message}</h5>
            <div className="btns">
                <button className="no" onClick={props.setPopup}>NO</button>
                <button className="yes" onClick={props.handleFunction}>YES</button>
            </div>
        </div>
    </div>
  )
}

export default ConfirmationMessage