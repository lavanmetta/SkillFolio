import { useContext } from "react";
import html2pdf from "html2pdf.js";

import { BasicDetailsContext } from "../Context/BasicDetails";

function BasicDetailsTemplate() {
  const { basicDetails } = useContext(BasicDetailsContext);
  const { name, phoneNumber, email, country, city, jobProfile, summary } =
    basicDetails;

  const downloadAsPdf = () => {
    const content = document.getElementById("pdfContent");

    const pdfOptions = {
      margin: 5,
      filename: "skillfolio.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf(content, pdfOptions);
  };

  return (
    <div className="template-container">
      <div className="template-header">
        <div>
          <h1>Resume Preview</h1>
        </div>
        <div>
          <button>Select Templates</button>
          <button onClick={downloadAsPdf}>Download PDF</button>
        </div>
      </div>

      <div className="resume-main" id="pdfContent">
        <div className="header">
          <h1>{name || "John Caster"}</h1>
          <p>{jobProfile}</p>
        </div>
        <div className="basic-details-container">
          <div className="profile">
            <h1>Profile</h1>
            <p>{summary}</p>
          </div>
          <div className="Details">
            <ul>
              <li>{phoneNumber}</li>
              <li>{email}</li>
              <li>{city}</li>
              <li>{country}</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BasicDetailsTemplate;
