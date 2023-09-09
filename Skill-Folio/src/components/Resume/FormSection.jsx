import BasicInfo from "../FormHandlers/BasicInfo/BasicInfo";
import AddEducation from "../FormHandlers/Education/AddEducation";
import SkillsDetails from "../FormHandlers/Skills/SkillsDetails";
import "./FormSection.css";
export default function FormSection() {
  return (
    <div className="formsection-container">
      <BasicInfo />
      <AddEducation />
      <SkillsDetails />
    </div>
  );
}
