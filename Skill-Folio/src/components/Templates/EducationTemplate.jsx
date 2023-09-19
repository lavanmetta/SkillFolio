import { useContext } from "react";
import { EducationDetailsContext } from "../Context/EducationDetails";

export default function EducationTemplate() {
  const { educationDetails } = useContext(EducationDetailsContext);
  console.log(educationDetails);
  return (
    <div>
      <div>
        <h1>Education Details</h1>
      </div>
      <div>
        {educationDetails.map((education, index) => (
          <div key={index} className="edu-container">
            <div className="edu1">
              <h4>{education.degree}</h4>
              <p>{education.institute}</p>
            </div>
            <div className="edu2">
              <p>
                {education.startDate}-{education.endDate}
              </p>
              <p>{education.city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
