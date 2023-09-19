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
          <div key={index}>
            <h2>Degree: {education.degree}</h2>
            <p>Institution: {education.institute}</p>
            <p>Start Date: {education.startDate}</p>
            <p>End Date: {education.endDate}</p>
            <p>City: {education.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
