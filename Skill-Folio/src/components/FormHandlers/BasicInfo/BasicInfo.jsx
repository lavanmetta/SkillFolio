import { useContext, useState } from "react";
import { BasicDetailsContext } from "../../Context/BasicDetails";
import logo from "../../../assets/logo.png";
import "../FormHandler.css";

export default function BasicInfo() {
  const { basicDetails, setBasicDetails } = useContext(BasicDetailsContext);
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission status

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(!isSubmitted); // Set submission status to true
  };

  return (
    <div>
      <div className="icon-container">
        <img src={logo} className="cv-icon" alt="logo" />
        <h1>
          Skill<span className="folio">Folio</span>
        </h1>
      </div>
      <h2>Personal Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="basicinfo-form-container">
          <div className="sec1">
            <label htmlFor="jb">Wanted Job Title</label>
            <input
              id="jb"
              placeholder="e.g Software Developer"
              onChange={(e) =>
                setBasicDetails({ ...basicDetails, jobProfile: e.target.value })
              }
              readOnly={isSubmitted} // Make input non-editable after submission
            />
            <label>Full Name</label>
            <input
              placeholder="John Wick"
              onChange={(e) =>
                setBasicDetails({ ...basicDetails, name: e.target.value })
              }
              readOnly={isSubmitted} // Make input non-editable after submission
            />
          </div>

          <div className="sec1">
            <label>Email</label>
            <input
              placeholder="abc@gmail.com"
              onChange={(e) =>
                setBasicDetails({ ...basicDetails, email: e.target.value })
              }
              readOnly={isSubmitted} // Make input non-editable after submission
            />
            <label>Phone Number</label>
            <input
              placeholder="+91 XXX XXX"
              onChange={(e) =>
                setBasicDetails({
                  ...basicDetails,
                  phoneNumber: e.target.value,
                })
              }
              readOnly={isSubmitted} // Make input non-editable after submission
            />
          </div>
        </div>
        <div className="basicinfo-form-container bsf">
          <div className="sec1">
            <label>Country</label>
            <input
              placeholder="India"
              onChange={(e) =>
                setBasicDetails({ ...basicDetails, country: e.target.value })
              }
              readOnly={isSubmitted} // Make input non-editable after submission
            />
          </div>

          <div className="sec1">
            <label>City</label>
            <input
              placeholder="Hyderabad"
              onChange={(e) =>
                setBasicDetails({ ...basicDetails, city: e.target.value })
              }
              readOnly={isSubmitted} // Make input non-editable after submission
            />
          </div>
        </div>
        {isSubmitted ? (
          <button type="submit">clear</button>
        ) : (
          <button type="submit">Submit</button>
        )}
      </form>
    </div>
  );
}
