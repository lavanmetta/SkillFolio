import FormSection from "../FormHandlers/FormSection";
import TemplateSection from "./TemplateSection";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <FormSection />
      <TemplateSection />
    </div>
  );
}

export default Resume;
