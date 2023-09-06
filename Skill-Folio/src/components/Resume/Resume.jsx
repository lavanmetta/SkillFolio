import FormSection from "./FormSection";
import TemplateSection from "./TemplateSection";
import "./Resume.css";
import { BasicDetailsProvider } from "../Context/BasicDetails";

function Resume() {
  return (
    <div className="resume-container">
      <BasicDetailsProvider>
        <FormSection />
        <TemplateSection />
      </BasicDetailsProvider>
    </div>
  );
}

export default Resume;
