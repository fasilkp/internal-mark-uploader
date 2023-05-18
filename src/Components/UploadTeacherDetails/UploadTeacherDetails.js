import React, { useState } from "react";
import * as xlsx from "xlsx";
import "../UploadStudentDetails/fileupload.css";
import db from "../../config/firebase"
import { setDoc, doc } from "firebase/firestore"
import { ClipLoader } from "react-spinners";
import {useNavigate} from 'react-router-dom'


function UploadTeacherDetails() {
    const [jsonFile, setJsonFile] = useState([]);
    const [load, setLoad] = useState({upload:false});
    const [fileMessage, setFileMessage] = useState({message:"Select a file or drag here", color:"black"});
    const [btnBlock, setBtnBlock]=useState(true)
    const navigate=useNavigate()
    const readUploadFile = (e) => {
      e.preventDefault();
      setFileMessage({message:e.target.files[0].name, color:"black"})
      var allowedExtensions = /(\.xlsx|\.xls)$/i;
      if (!allowedExtensions.exec(e.target.value)) {
        setBtnBlock(true)
        setFileMessage({message:"Please upload .xlsx file",color:"red"})
        e.target.value = "";
        return false;
      }
      else{
        setBtnBlock(false)
      }
      if (e.target.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = e.target.result;
          const workbook = xlsx.read(data, { type: "array" });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const json = xlsx.utils.sheet_to_json(worksheet);
          setJsonFile(json);
          if( json[0] && json[0].hasOwnProperty("name") && json[0].hasOwnProperty("regNo")
           && json[0].hasOwnProperty("email")){
            console.log(json);
            setBtnBlock(false)
          }
          else{
            setFileMessage({message:"please upload column names as: name, regNo, email",color:"red"})
            setBtnBlock(true)
          }
        };
        reader.readAsArrayBuffer(e.target.files[0]);
      }
    };
    function randomNumber() {
      const min = 1;
      const max = 100;
      return parseInt((min + Math.random() * (max - min))*1000000);
    }
    const onHandleUpload=async ()=>{
      setLoad({...load, upload:true})
      const promises=jsonFile.map(async(obj)=>{
        await setDoc(doc(db, "teachers", obj.regNo.toUpperCase()), {
          regNo:obj.regNo.toUpperCase(),
          name:obj.name.toUpperCase(),
          email:obj.email,
          secretCode:randomNumber()
        })
      })
      await Promise.all(promises);
      setLoad({...load, upload:true})
      alert("completed");
      navigate('/admin/teacher')
      
    }
  return (
    <div className="uploadContainer">
      <h2>Upload Teacher Details</h2>
      <p className="lead">
        Insert file in <span>Excel Format</span>
      </p>
      <div className="uploadBox">
        <form id="file-upload-form" className="uploader">
          
          <label htmlFor="file-upload" id="file-drag">
            <img id="file-image" src="#" alt="Preview" className="hidden" />
            <div id="start">
              <i className="fa fa-download" aria-hidden="true"></i>
              <div  style={{color:fileMessage.color, fontWeight:600}}>{fileMessage.message}</div>
              <span id="file-upload-btn" className="btn btn-primary">
                Select a file
              </span>
            </div>
            <div id="response" className="hidden">
              <div id="messages"></div>
              <progress className="progress" id="file-progress" value="0">
                <span>0</span>%
              </progress>
            </div>
            
          </label>
        </form>
        <input
            id="file-upload"
            type="file"
            name="fileUpload"
            accept=".xlsx,.xls"
            onChange={readUploadFile}
          />
        <button className="uploadBtn" onClick={onHandleUpload} disabled={btnBlock}>
        {load.upload ?<ClipLoader size="25" color="white"/>: "Upload"}
          </button>
      </div>
      
    </div>
  )
}

export default UploadTeacherDetails