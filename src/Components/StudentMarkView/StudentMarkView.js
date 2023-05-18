import React,{useState, useEffect} from 'react'
import db from "../../config/firebase"
import {collection, query, where, getDocs,getDoc,doc} from 'firebase/firestore'
import "../UploadMark/UploadMark.css"
import {  useLocation, useNavigate ,useParams} from 'react-router-dom'
import exportFromJSON from 'export-from-json' 
import jsPDF from "jspdf";
import "jspdf-autotable";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function StudentMarkView() {
    const location =useLocation();
    const navigate =useNavigate();
    const {sem, subject,course,year}=location.state;
    const fileName = year+'-sem-'+sem+'-'+subject 
    const exportType = 'xls'
    const [students, setStudents]=useState([])
    const [data,setData]=useState([])
    const [subName,setSubName]=useState("")
    const [btnBlock,setbtnBlock]=useState(true)
    const [courseName,setCourseName]=useState("")
    const studentRef=collection(db, "student")
    useEffect(()=>{
        (async () => {
            let q =await query(studentRef, where("courseId", "==", course));
            q = await query(q, where("year", "==", year));
            await getDocs(q).then((querySnapshot)=>{
            setStudents(querySnapshot.docs);
            });
            const subDoc =  await getDoc(doc(db, 'courses', course));
            setCourseName(subDoc.data().name)
            subDoc.data()['sem'+sem].subjects.forEach((sub)=>{
                if(sub.subCode===subject){
                    setSubName(sub.subName)
                }
            })
        })();
      },[])
    useEffect(()=>{
        if(students[0]?.data()?.mark?.['sem'+sem]?.[subject]?.uploadedDate)
        {   
            setbtnBlock(false)
        }
      },[students])
      const downloadExcel=()=>{
          setData([])
        students.map(async obj=>{
            let item=obj.data().mark['sem'+sem][subject]
            data.push({regNo:obj.data().regNo,
                name:obj.data().name,
                assignment:item.assignment,
                attendance:item.attendance, 
                seminar:item.seminar,
                exam:item.exam,
                total:item.total  
            })
        })
        console.log(data)
        exportFromJSON({ data, fileName, exportType})
        
      }
    const exportPDF = () => {
        setData([])
        students.map(obj=>{
            let item=obj.data().mark['sem'+sem][subject]
            data.push({regNo:obj.data().regNo,
                name:obj.data().name,
                assignment:item.assignment,
                attendance:item.attendance, 
                seminar:item.seminar,
                exam:item.exam,
                total:item.total  
            })
        })
        const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);
    const title = "Subject : "+subName+" | Semester "+sem;
    const headers = [["Register No","Name","Assignment","Attendance","Seminar","Exam","Total"]];

    const datas = data.map(elt=> [elt.regNo, elt.name,elt.assignment,elt.attendance,elt.seminar,elt.exam,elt.total]);

    let content = {
      startY: 50,
      head: headers,
      body: datas
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf")
    }
    const share=()=>{
        navigate(`/mark/${sem}/${subject}/${course}/${year}`)
    }
  return (
    <div className="main row uploadMark">
        <div className="head"><div><h5>Subject Details</h5></div></div>
        <div className="table">
        <table className='stDetails'>
            <tbody>
                <tr className='tableFirstRow'>
                    <th>Subject</th>
                    <th>Year</th>
                    <th>Sem</th> 
                    <th>Course</th> 
                </tr>
                <tr >
                    <td>{subName && subName}</td>
                    <td >{year}</td>
                    <td >Semester {sem}</td> 
                    <td >{courseName && courseName}</td> 
                </tr>
            </tbody>
        </table>
        
        </div>
        <div className="head"><div><h5>Internal Marks</h5></div></div>
        <div className="table">
            <table>
            <tbody>
                <tr className='tableFirstRow'>
                    <th>Register No</th>
                    <th>Name</th>
                    <th>Assignment</th>
                    <th>Attendance</th>
                    <th>Exam</th>
                    <th>Seminar</th>
                    <th>Total</th>
                </tr>
                {
                    students.map((obj, index)=>{
                        return <tr key={index}>
                            <td>{obj.data().regNo}</td>
                            <td>{obj.data().name}</td>
                            <td>{
                            obj?.data()?.mark?.['sem'+sem]?.[subject]?.assignment ? 
                            obj.data().mark['sem'+sem][subject].assignment : "-"}</td>
                            <td>{
                            obj?.data()?.mark?.['sem'+sem]?.[subject]?.attendance ?
                             obj.data().mark['sem'+sem][subject].attendance : "-"}</td>
                            <td>{
                           obj?.data()?.mark?.['sem'+sem]?.[subject]?.exam  ?
                             obj.data().mark['sem'+sem][subject].exam : "-"}</td>
                            <td>{
                           obj?.data()?.mark?.['sem'+sem]?.[subject]?.seminar ?
                             obj.data().mark['sem'+sem][subject].seminar : "-"}</td>
                            <td>{
                            obj?.data()?.mark?.['sem'+sem]?.[subject]?.total?
                             obj.data().mark['sem'+sem][subject].total : "-"}</td>
                        </tr> 
                    })
                }
                </tbody>
            </table>
        </div>
       
             <div className="btns-group">
            <a href={`https://api.whatsapp.com/send?text= *തായേ ഉള്ള ലിങ്കില്‍ ക്ലിക്ക് ചെയിത് "${subName}"  ഇന്റെര്‍ണല്‍ മാര്‍ക്ക്‌ ഡൌണ്‍ലോഡ് ചെയ്യുക*
             ${encodeURIComponent('\n----------------------------------------------------------------\n'+`https://internal-mark-uploader.web.app/mark/${sem}/${subject}/${course}/${year}`)}`}
              data-action="share/whatsapp/share" target="_blank"
              >
                    <button className='share' disabled={btnBlock}>Share Through Whatsapp<FontAwesomeIcon className='btnLogo' icon="share-nodes" /></button>
              </a>
            <button className='download' disabled={btnBlock}  onClick={downloadExcel}>Download Excel File<FontAwesomeIcon className='btnLogo' icon="arrow-down" /></button>
            <button className='download' disabled={btnBlock} onClick={exportPDF}>Download Pdf <FontAwesomeIcon className='btnLogo' icon="arrow-down" /></button>
        </div>
        
    </div>
  )
}

export default StudentMarkView