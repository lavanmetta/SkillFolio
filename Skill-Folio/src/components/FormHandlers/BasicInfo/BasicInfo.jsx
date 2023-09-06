import "../FormHandler.css";
// import { useContext } from "react";
// import { BasicDetailsContext } from "../../Context/BasicDetails";
import logo from "../../../assets/logo.png";

export default function BasicInfo() {
  return (
    <div>
      <div className="icon-container">
        <img src={logo} className="cv-icon" />
        <h1>
          Skill<span className="folio">Folio</span>
        </h1>
      </div>
      <h2>Personal Details</h2>
      <div className="basicinfo-form-container">
        <div className="sec1">
          <label>Wanted Job Title</label>
          <input placeholder="e.g Software Developer" />
          <label>Full Name</label>
          <input placeholder="John Wick" />
        </div>

        <div className="sec1">
          <label>Email</label>
          <input placeholder="abc@gmail.com" />
          <label>Phone Number</label>
          <input placeholder="+91 XXX XXX" />
        </div>
      </div>

      <div className="basicinfo-form-container">
        <div className="sec1">
          <label>Country</label>
          <input placeholder="India" />
        </div>

        <div className="sec1">
          <label>City</label>
          <input placeholder="Hyderabad" />
        </div>
      </div>



      <div className="basicinfo-form-container">
        <div className="sec1">
          <label>Country</label>
          <input placeholder="India" />
        </div>

        <div className="sec1">
          <label>City</label>
          <input placeholder="Hyderabad" />
        </div>
      </div>



      <div className="basicinfo-form-container">
        <div className="sec1">
          <label>Country</label>
          <input placeholder="India" />
        </div>

        <div className="sec1">
          <label>City</label>
          <input placeholder="Hyderabad" />
        </div>
      </div>
      <div className="basicinfo-form-container">
        <div className="sec1">
          <label>Country</label>
          <input placeholder="India" />
        </div>

        <div className="sec1">
          <label>City</label>
          <input placeholder="Hyderabad" />
        </div>
      </div>
    </div>
  );
}
