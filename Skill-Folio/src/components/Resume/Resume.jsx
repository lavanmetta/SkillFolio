import FormSection from "./FormSection";
import TemplateSection from "./TemplateSection";
import { BasicDetailsProvider } from "../Context/BasicDetails";
import "./Resume.css";

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
