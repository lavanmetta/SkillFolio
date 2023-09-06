import { useContext } from "react";
import { BasicDetailsContext } from "../Context/BasicDetails";
import "./Template.css";
export default function TemplateSection() {
  const { name, email } = useContext(BasicDetailsContext);
  return (
    <div className="template-container">
      <h1>Preview Youe resume</h1>
      <div>
        <h1>{name}</h1>
        <p>Email {email}</p>
      </div>
    </div>
  );
}
