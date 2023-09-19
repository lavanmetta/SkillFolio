import { useContext } from "react";

import { BasicDetailsContext } from "../Context/BasicDetails";

function BasicDetailsTemplate() {
  const { basicDetails } = useContext(BasicDetailsContext);
  const { name, phoneNumber, email, country, city, jobProfile, summary } =
    basicDetails;

  return (
    <>
      <div className="header">
        <h1>{name || "John Mathew"}</h1>
        <p>{jobProfile || "Software XXX"}</p>
      </div>
      <div className="basic-details-container">
        <div className="profile">
          <h1>Profile</h1>
          <p>
            {summary ||
              "Results-driven Software Developer with [X years of experience] in designing, coding, and delivering high-quality software solutions. Skilled in [programming languages], with a passion for solving complex problems and a commitment to best practices in software development. Seeking a challenging Software Developer position at [Company Name] to contribute technical expertise and drive innovation in a collaborative team environment."}
          </p>
        </div>
        <div className="Details">
          <ul>
            <li>{phoneNumber || "+91 123456789"}</li>
            <li>{email || "abc@gmail.com"}</li>
            <li>{city || "Hyderabad"}</li>
            <li>{country || "India"}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default BasicDetailsTemplate;
