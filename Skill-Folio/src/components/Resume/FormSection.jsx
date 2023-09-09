import BasicInfo from "../FormHandlers/BasicInfo/BasicInfo";
import AddEducation from "../FormHandlers/Education/AddEducation";
import "./FormSection.css";
export default function FormSection() {
  return (
    <div className="formsection-container">
      <BasicInfo />
      <AddEducation />
    </div>
  );
}
