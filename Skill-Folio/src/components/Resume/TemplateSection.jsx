import { useContext } from "react";
import "./Template.css";
import { BasicDetailsContext } from "../Context/BasicDetails";

function TemplateSection() {
  const { basicDetails } = useContext(BasicDetailsContext);
  const { name, phoneNumber, email, country, city, jobProfile } = basicDetails;
  return (
    <div className="template-container">
      <div className="template-header">
        <div>
          <h1>Resume Preview</h1>
        </div>
        <div>
          <button>Select Templates</button>
          <button>Download PDF</button>
        </div>
      </div>

      <div className="resume-main">
        <div className="header">
          <h1>{name}</h1>
          <p>{jobProfile}</p>
        </div>
        <div className="basic-details-container">
          <div className="profile">
            <h1>Profile</h1>
            <p>
              Junior Software Developer with 5 Months of experience in Front-End
              Development, seeking full-time Development roles.Junior Software
              Developer with 5 Months of experience in Front-End Development,
              seeking full-time Development roles.
            </p>
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

        <div className="edu-skills">
          <div className="main-edu">
            <h1>Education</h1>
          </div>

          <div className="main-skill">
            <h1>Skills</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateSection;
