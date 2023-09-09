import { useState } from "react";
import Education from "./Education"; // Import your Education component
import "../FormHandler.css";

export default function AddEducation() {
  const [educationList, setEducationList] = useState([{}]); // State to store education details

  const handleAddEducation = () => {
    // Add a new empty education object to the list
    setEducationList([...educationList, {}]);
  };

  console.log(educationList);

  const handleUpdateEducation = (index, updatedEducation) => {
    // Update the education details at the specified index
    const updatedList = [...educationList];
    updatedList[index] = updatedEducation;
    setEducationList(updatedList);
  };

  const handleRemoveEducation = (index) => {
    // Remove the education details at the specified index
    const updatedList = [...educationList];
    updatedList.splice(index, 1);
    setEducationList(updatedList);
  };

  return (
    <div>
      <div>
        <h1>Education Details</h1>
      </div>

      {educationList.map((education, index) => (
        <Education
          key={index}
          index={index}
          education={education}
          onUpdateEducation={handleUpdateEducation}
          onRemoveEducation={handleRemoveEducation}
        />
      ))}

      <div>
        <button onClick={handleAddEducation}>Add Education</button>
      </div>
    </div>
  );
}
