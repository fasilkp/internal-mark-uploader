import React, { useState, useEffect } from "react";
import * as xlsx from "xlsx";
import "./fileupload.css";
import db from "../../config/firebase";
import { setDoc, doc, onSnapshot, collection } from "firebase/firestore";
import { replaceSpecialCharecters } from "../../commonFunctions/idGenerate";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

function UploadStudentDetails() {
  const [jsonFile, setJsonFile] = useState([]);
  const [load, setLoad] = useState({ upload: false, course: true });
  const [fileMessage, setFileMessage] = useState({
    message: "Select a file or drag here",
    color: "black",
  });
  const [btnBlock, setBtnBlock] = useState(true);
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState("");
  const [courseObj, setCourseObj]=useState({})
  const navigate = useNavigate();
  const readUploadFile = (e) => {
    e.preventDefault();
    setFileMessage({ message: e.target.files[0].name, color: "black" });
    var allowedExtensions = /(\.xlsx|\.xls)$/i;
    if (!allowedExtensions.exec(e.target.value) && course=="") {
      setBtnBlock(true);
      setFileMessage({ message: "Please upload .xlsx file", color: "red" });
      e.target.value = "";
      return false;
    } else {
      setBtnBlock(false);
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
        if (
          json[0] &&
          json[0].hasOwnProperty("name") &&
          json[0].hasOwnProperty("regNo") &&
          json[0].hasOwnProperty("year")
        ) {
          console.log(json);
          setBtnBlock(false);
        } else {
          setFileMessage({
            message: "please upload column names as: name, year, regNo",
            color: "red",
          });
          setBtnBlock(true);
        }
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };
  useEffect(() => {
    onSnapshot(collection(db, "courses"), (snapshot) => {
      setCourses(snapshot.docs);
      let items={}
      snapshot.docs.map(item=>{
        items[item.data().id]=item.data().name
      })
      console.log(items);
      setCourseObj(items)
      setCourse(snapshot.docs[0].data().id);
      setLoad({ ...load, course: false });
    });
  }, []);
  const onHandleUpload = async () => {
    setLoad({ ...load, upload: true });
    const promises = jsonFile.map(async (obj) => {
      await setDoc(doc(db, "student", obj.regNo.toUpperCase()), {
        courseId: course,
        regNo: obj.regNo.toUpperCase(),
        name: obj.name.toUpperCase(),
        course: courseObj[course],
        year: obj.year,
        mark: {},
      });
    });
    await Promise.all(promises);
    setLoad({ ...load, upload: true });
    alert("completed");
    navigate("/admin/student");
  };
  return (
    <div className="uploadContainer">
      <h2>Upload Student Details</h2>
      <p className="lead">
        Insert file in <span>Excel Format</span>
      </p>
      <div className="uploadBox">
        {load.course ? (
          <div className="form-select ustd-select">
            <ClipLoader size="20px" color="#11101d" />{" "}
          </div>
        ) : (
          <select
            className="form-select ustd-select"
            value={course}
            onChange={(e) => {
              setCourse(e.target.value);
            }}
          >
            {courses.map((obj, index) => {
              return (
                <option key={index} value={obj.data().id}>
                  {obj.data().name}
                </option>
              );
            })}
          </select>
        )}
        <form id="file-upload-form" className="uploader">
          <label htmlFor="file-upload" id="file-drag">
            <img id="file-image" src="#" alt="Preview" className="hidden" />
            <div id="start">
              <i className="fa fa-download" aria-hidden="true"></i>
              <div style={{ color: fileMessage.color, fontWeight: 600 }}>
                {fileMessage.message}
              </div>
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
        <button
          className="uploadBtn"
          onClick={onHandleUpload}
          disabled={btnBlock}
        >
          {load.upload ? <ClipLoader size="25" color="white" /> : "Upload"}
        </button>
      </div>
    </div>
  );
}

export default UploadStudentDetails;
