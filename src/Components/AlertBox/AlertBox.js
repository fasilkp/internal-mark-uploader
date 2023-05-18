import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../confirmationMessage/ConfirmationMessage.css'
function AlertBox(props) {
  return (
    <div className='ConfirmationMessage'>
        <div className="confirmBox">
            <div className="icon"><FontAwesomeIcon className='logo' icon={props.icon} /></div>
            <h6 className='message'>{props.message}</h6>
            <div className="btns">
                <button className="yes" onClick={props.setPopup}>Done</button>
            </div>
        </div>
    </div>
  )
}

export default AlertBox