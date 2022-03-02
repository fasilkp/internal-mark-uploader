import React from 'react'
import "./UploadMark.css"

function UploadMark() {
  return (
    <div className="main row">
        <div className="head"><div><h5>Enter Internal Marks</h5></div></div>
        <div className="table">
            <table>
                <tr>
                    <td>Register No</td>
                    <td>Name</td>
                    <td>Assignment</td>
                    <td>Attendance</td>
                    <td>Exam</td>
                    <td>Seminar</td>
                    <td>Total</td>
                </tr>
                <tr>
                    <td>MSATSCS001</td>
                    <td>Rahul Bhaskaran</td>
                    <td><input type="number" value="5" /></td>
                    <td><input type="number" value="5" /></td>
                    <td><input type="number" value="5" /></td>
                    <td><input type="number" value="5" /></td>
                    <td><input type="number" value="20" disabled/></td>
                </tr> 
                <tr>
                    <td>MSATSCS001</td>
                    <td>Rahul Bhaskaran</td>
                    <td><input type="number" value="5" /></td>
                    <td><input type="number" value="5" /></td>
                    <td><input type="number" value="5" /></td>
                    <td><input type="number" value="5" /></td>
                    <td><input type="number" value="20" disabled/></td>
                </tr> 
                <tr>
                    <td>MSATSCS001</td>
                    <td>Rahul Bhaskaran</td>
                    <td><input type="number" value="5" /></td>
                    <td><input type="number" value="5" /></td>
                    <td><input type="number" value="5" /></td>
                    <td><input type="number" value="5" /></td>
                    <td><input type="number" value="20" disabled/></td>
                </tr> 
                <tr>
                    <td>MSATSCS001</td>
                    <td>Rahul Bhaskaran</td>
                    <td><input type="number" value="5" /></td>
                    <td><input type="number" value="5" /></td>
                    <td><input type="number" value="5" /></td>
                    <td><input type="number" value="5" /></td>
                    <td><input type="number" value="20" disabled/></td>
                </tr> 
            </table>
        </div>
        <div className="btns">
            <div><button className='submit-btn'>Submit</button></div>
            
        </div>
    </div>
  )
}

export default UploadMark