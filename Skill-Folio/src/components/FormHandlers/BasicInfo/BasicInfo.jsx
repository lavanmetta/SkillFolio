import { useContext } from "react";
import { BasicDetailsContext } from "../../Context/BasicDetails";
import logo from "../../../assets/logo.png";
import "../FormHandler.css";

export default function BasicInfo() {
  const { name, email, setName, setEmail } = useContext(BasicDetailsContext);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
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
          <label htmlFor="jb">Wanted Job Title</label>
          <input id="jb" placeholder="e.g Software Developer" />
          <label>Full Name</label>
          <input
            placeholder="John Wick"
            value={name}
            onChange={handleNameChange}
          />
        </div>

        <div className="sec1">
          <label>Email</label>
          <input
            placeholder="abc@gmail.com"
            value={email}
            onChange={handleEmailChange}
          />
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
    </div>
  );
}
