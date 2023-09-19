import html2pdf from "html2pdf.js";
import BasicDetailsTemplate from "../Templates/BasicDetailsTemplate";
import EducationTemplate from "../Templates/EducationTemplate";

import "./Template.css";
export default function TemplateSection() {
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
        <BasicDetailsTemplate />
        <EducationTemplate />
      </div>
    </div>
  );
}
