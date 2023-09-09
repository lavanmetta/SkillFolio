import FormSection from "./FormSection";
import TemplateSection from "./TemplateSection";
import { BasicDetailsProvider } from "../Context/BasicDetails";
import "./Resume.css";
import { EducationDetailsProvider } from "../Context/EducationDetails";

function Resume() {
  return (
    <div className="resume-container">
      <EducationDetailsProvider>
        <BasicDetailsProvider>
          <FormSection />
          <TemplateSection />
        </BasicDetailsProvider>
      </EducationDetailsProvider>
    </div>
  );
}

export default Resume;
