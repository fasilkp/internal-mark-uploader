import React from 'react'
import "./InternalDisplay.css"
function InternalDisplay() {
  return (
    <div className='row InternalDisplay'>
        <div className="col-md-12 text"><h5>Student Details</h5></div>
        <div className="col-md-12">
            <table className='st-details'>
                <tr>
                    <th>Register No</th>
                    <td>MSATS021</td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>Fasil</td>
                </tr>
                <tr>
                    <th>Sem</th>
                    <td>6</td>
                </tr>
            </table>
        </div>
        <div className="col-md-12 text"><h5>Internal Marks</h5></div>
        <div className="col-md-12">
            <table className='mrk-details'>
                <tr>
                    <th>Subject</th>
                    <th>Attendance</th>
                    <th>Assignment</th>
                    <th>Exam</th>
                    <th>Seminar</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td>java</td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                </tr>
                <tr>
                <td>php</td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                </tr>
                <tr>
                <td>javascript</td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                </tr>
                <tr>
                <td>android</td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                </tr>
                <tr>
                <td>software</td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default InternalDisplay