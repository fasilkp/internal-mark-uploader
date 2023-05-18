import React, { useState, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../common styles/containerStyles.css";
import "./../AddCourse/AddCourse.css";
import { useLocation, useNavigate } from "react-router-dom";
import db from "../../config/firebase";
import { setDoc, doc,deleteDoc } from "firebase/firestore";
import { ClipLoader } from "react-spinners";

function EditCourse() {
  const location = useLocation();
  const { obj } = location.state;

  const [load, setLoad] = useState({ submit: obj.false });

  const [course, setCourse] = useState({ name: obj.name, variable: obj.id });
  const [input1, setInput1] = useState({ subName: "", subCode: "" });
  const [input2, setInput2] = useState({ subName: "", subCode: "" });
  const [input3, setInput3] = useState({ subName: "", subCode: "" });
  const [input4, setInput4] = useState({ subName: "", subCode: "" });
  const [input5, setInput5] = useState({ subName: "", subCode: "" });
  const [input6, setInput6] = useState({ subName: "", subCode: "" });

  const navigate = useNavigate();

  const [sem1, setSem1] = useState(obj.sem1);
  const [sem2, setSem2] = useState(obj.sem2);
  const [sem3, setSem3] = useState(obj.sem3);
  const [sem4, setSem4] = useState(obj.sem4);
  const [sem5, setSem5] = useState(obj.sem5);
  const [sem6, setSem6] = useState(obj.sem6);

  const addToSem1 = () => {
    setSem1({ ...sem1, subjects: [...sem1.subjects, input1] });
    setInput1({ subName: "", subCode: "" });
  };

  const addToSem2 = () => {
    setSem2({ ...sem2, subjects: [...sem2.subjects, input2] });
    setInput2({ subName: "", subCode: "" });
  };

  const addToSem3 = () => {
    setSem3({ ...sem3, subjects: [...sem3.subjects, input3] });
    setInput3({ subName: "", subCode: "" });
  };

  const addToSem4 = () => {
    setSem4({ ...sem4, subjects: [...sem4.subjects, input4] });
    setInput4({ subName: "", subCode: "" });
  };

  const addToSem5 = () => {
    setSem5({ ...sem5, subjects: [...sem5.subjects, input5] });
    setInput5({ subName: "", subCode: "" });
  };

  const addToSem6 = () => {
    setSem6({ ...sem6, subjects: [...sem6.subjects, input6] });
    setInput6({ subName: "", subCode: "" });
  };

  function replaceSpecialCharecters(str) {
    return (" " + str)
      .replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "_")
      .replace(/ /g, "_")
      .toLowerCase()
      .substr(1, str.length);
  }
  async function onHandleSubmit() {
    if(obj.id!==course.variable){
      await deleteDoc(doc(db, "courses", obj.id)).then(async ()=>{
        console.log("deleted");
      })
    }
    setLoad({ ...load, submit: true });
    await setDoc(doc(db, "courses", course.variable), {
      name: course.name,
      id: course.variable,
      sem1,
      sem2,
      sem3,
      sem4,
      sem5,
      sem6,
    })
      .then(() => {
        alert("suuccessfully edited");
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const removeELement = (index, n) => {
    const sem = eval("sem" + n + ".subjects");
    sem.splice(index, 1);
    eval("setSem" + n + "({subjects:[...sem]})");
    console.log(sem1);
  };

  return (
    <Fragment>
      <div className="text">Edit Course</div>
      <div className="main edit-container">
        <div className="form-container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="mb-3">
              <h4 className="container-header">Edit Course Details</h4>
            </div>
            <div className="mb-3">
              <label className="form-label">Course Name</label>
              <input
                type="text"
                className="form-control"
                value={course.name}
                onChange={(e) => {
                  setCourse({
                    name: e.target.value,
                    variable: replaceSpecialCharecters(e.target.value),
                  });
                }}
                id="name"
                placeholder="Enter Student Name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Sem 1</label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control add-subject-input"
                  value={input1.subName}
                  onChange={(e) => {
                    setInput1({ ...input1, subName: e.target.value });
                  }}
                  placeholder="Enter sem Subjects"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <input
                  type="text"
                  className="form-control add-subject-input"
                  value={input1.subCode}
                  onChange={(e) => {
                    setInput1({ ...input1, subCode: e.target.value });
                  }}
                  placeholder="Enter sem Subjects"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  onClick={addToSem1}
                  disabled={input1.subName == "" || input1.subCode == ""}
                >
                  Add
                </button>
              </div>
              <ul className="list-group">
                {sem1.subjects.map((item, index) => {
                  return (
                    <li key={index} className="list-group-item">
                      ({item.subCode}) &nbsp; {item.subName}
                      <div
                        className="list-icon list-icons"
                        onClick={() => removeELement(index, 1)}
                      >
                        <FontAwesomeIcon className="penIcon" icon="trash" />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mb-3">
              <label className="form-label">Sem 2</label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control add-subject-input"
                  value={input2.subName}
                  onChange={(e) => {
                    setInput2({ ...input2, subName: e.target.value });
                  }}
                  placeholder="Enter sem Subjects"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <input
                  type="text"
                  className="form-control add-subject-input"
                  value={input2.subCode}
                  onChange={(e) => {
                    setInput2({ ...input2, subCode: e.target.value });
                  }}
                  placeholder="Enter sem Subjects"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  onClick={addToSem2}
                  disabled={input2.subName == "" || input2.subCode == ""}
                >
                  Add
                </button>
              </div>
              <ul className="list-group">
                {sem2.subjects.map((item, index) => {
                  return (
                    <li key={index} className="list-group-item">
                      ({item.subCode}) &nbsp; {item.subName}
                      <div
                        className="list-icon list-icons"
                        onClick={() => removeELement(index, 2)}
                      >
                        <FontAwesomeIcon className="penIcon" icon="trash" />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mb-3">
              <label className="form-label">Sem 3</label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control add-subject-input"
                  value={input3.subName}
                  onChange={(e) => {
                    setInput3({ ...input3, subName: e.target.value });
                  }}
                  placeholder="Enter sem Subjects"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <input
                  type="text"
                  className="form-control add-subject-input"
                  value={input3.subCode}
                  onChange={(e) => {
                    setInput3({ ...input3, subCode: e.target.value });
                  }}
                  placeholder="Enter sem Subjects"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  onClick={addToSem3}
                  disabled={input3.subName == "" || input3.subCode == ""}
                >
                  Add
                </button>
              </div>
              <ul className="list-group">
                {sem3.subjects.map((item, index) => {
                  return (
                    <li key={index} className="list-group-item">
                      ({item.subCode}) &nbsp; {item.subName}
                      <div
                        className="list-icon list-icons"
                        onClick={() => removeELement(index, 3)}
                      >
                        <FontAwesomeIcon className="penIcon" icon="trash" />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mb-3">
              <label className="form-label">Sem 4</label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control add-subject-input"
                  value={input4.subName}
                  onChange={(e) => {
                    setInput4({ ...input4, subName: e.target.value });
                  }}
                  placeholder="Enter sem Subjects"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <input
                  type="text"
                  className="form-control add-subject-input"
                  value={input4.subCode}
                  onChange={(e) => {
                    setInput4({ ...input4, subCode: e.target.value });
                  }}
                  placeholder="Enter sem Subjects"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  onClick={addToSem4}
                  disabled={input4.subName == "" || input4.subCode == ""}
                >
                  Add
                </button>
              </div>
              <ul className="list-group">
                {sem4.subjects.map((item, index) => {
                  return (
                    <li key={index} className="list-group-item">
                      ({item.subCode}) &nbsp; {item.subName}
                      <div
                        className="list-icon list-icons"
                        onClick={() => removeELement(index, 4)}
                      >
                        <FontAwesomeIcon className="penIcon" icon="trash" />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mb-3">
              <label className="form-label">Sem 5</label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control add-subject-input"
                  value={input5.subName}
                  onChange={(e) => {
                    setInput5({ ...input5, subName: e.target.value });
                  }}
                  placeholder="Enter sem Subjects"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <input
                  type="text"
                  className="form-control add-subject-input"
                  value={input5.subCode}
                  onChange={(e) => {
                    setInput5({ ...input5, subCode: e.target.value });
                  }}
                  placeholder="Enter sem Subjects"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  onClick={addToSem5}
                  disabled={input5.subName == "" || input5.subCode == ""}
                >
                  Add
                </button>
              </div>
              <ul className="list-group">
                {sem5.subjects.map((item, index) => {
                  return (
                    <li key={index} className="list-group-item">
                      ({item.subCode}) &nbsp; {item.subName}
                      <div
                        className="list-icon list-icons"
                        onClick={() => removeELement(index, 5)}
                      >
                        <FontAwesomeIcon className="penIcon" icon="trash" />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mb-3">
              <label className="form-label">Sem 6</label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control add-subject-input"
                  value={input6.subName}
                  onChange={(e) => {
                    setInput6({ ...input6, subName: e.target.value });
                  }}
                  placeholder="Enter sem Subjects"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <input
                  type="text"
                  className="form-control add-subject-input"
                  value={input6.subCode}
                  onChange={(e) => {
                    setInput6({ ...input6, subCode: e.target.value });
                  }}
                  placeholder="Enter sem Subjects"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  onClick={addToSem6}
                  disabled={input6.subName == "" || input6.subCode == ""}
                >
                  Add
                </button>
              </div>
              <ul className="list-group">
                {sem6.subjects.map((item, index) => {
                  return (
                    <li key={index} className="list-group-item">
                      ({item.subCode}) &nbsp; {item.subName}
                      <div
                        className="list-icon list-icons"
                        onClick={() => removeELement(index, 6)}
                      >
                        <FontAwesomeIcon className="penIcon" icon="trash" />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="btn">
              <button type="reset" className="btn btn-danger">
                Clear
              </button>
              <button
                type="button"
                onClick={onHandleSubmit}
                className="btn btn-primary"
              >
                {load.submit ? <ClipLoader size="25" color="white" /> : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default EditCourse;
