import React,{useState, useEffect} from 'react'
import db from "../../config/firebase"
import {collection, query, where, getDocs} from 'firebase/firestore'
import {useParams} from 'react-router-dom'
import jsPDF from "jspdf";
import "jspdf-autotable";

function DownloadMark() {
    const {sem, subject,course,year}=useParams();
    const [data,setData]=useState([])
    const studentRef=collection(db, "student")
    useEffect(async()=>{
        let q =await query(studentRef, where("courseId", "==", course));
        q = await query(q, where("year", "==", year));
        await getDocs(q).then((querySnapshot)=>{
        querySnapshot.docs.map(async obj=>{
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
        });
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(15);

        const title = `SUBJECT: ${subject} | SEM: Semester ${sem}`;
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
      },[])
    const exportPDF = () => {
        
    }
  return (
    <div className="main">
        <h4 style={{textAlign:"center", marginTop:"200px"}}>Please Wait!! Downloading Will Start Automatically...</h4>
        <h6 style={{textAlign:"center"}}> If Downloading Not Started  <a href={`/mark/${sem}/${subject}/${course}/${year}`}>Restart</a></h6>
    </div>
  )
}

export default DownloadMark