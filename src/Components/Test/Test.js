import React,{useState,useEffect} from 'react';
import jsPDF from "jspdf";
import "jspdf-autotable";

function Test() {
  const [people,setPeople]=useState([
    { regNo:"msat01",name:"fasil",assignment:"5",attendance:"5",seminar:"5",exam:"5",total:"5" },
  ]);

  const exportPDF = () => {
    
  }
  useEffect(()=>{
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "My Awesome Report";
    const headers = [["Register No","Name","Assignment","Attendance","Seminar","Exam","Total"]];

    const data = people.map(elt=> [elt.regNo, elt.name,elt.assignment,elt.attendance,elt.seminar,elt.exam,elt.total]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf")
  },[])
    return (
      <div>
        <button onClick={() => exportPDF()}>Generate Report</button>
      </div>
    );
}

export default Test;