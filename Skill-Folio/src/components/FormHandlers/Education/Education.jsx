import { useEffect, useState, useContext } from "react";
import { years } from "../../../Data/Util";
import { EducationDetailsContext } from "../../Context/EducationDetails";

export default function Education() {
  const { educationDetails, setEducationDetails } = useContext(
    EducationDetailsContext
  );
  const [yearsList, setYearsList] = useState([]);
  const [eduData, setEduData] = useState({
    institute: "",
    degree: "",
    startDate: "",
    endDate: "",
    city: "",
  });

  useEffect(() => {
    setYearsList(years());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEduData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the entered education details to the list
    setEducationDetails([...educationDetails, eduData]);

    // Clear the form
    setEduData({
      degree: "",
      institute: "",
      startDate: "",
      endDate: "",
      city: "",
    });
  };

  return (
    <>
      <div className="edu">
        <div className="input-section">
          <div>
            <label htmlFor="institute">Institution</label>
            <input
              type="text"
              id="institute"
              name="institute"
              value={eduData.institute}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="degree">Degree</label>
            <input
              type="text"
              id="degree"
              name="degree"
              value={eduData.degree}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input-section">
          <div>
            <label htmlFor="startDate">Start Date</label>

            <select
              id="startDate"
              name="startDate"
              onChange={handleChange}
              value={eduData.startDate}
            >
              <option value="year">Start Year</option>
              {yearsList.map((each) => (
                <option key={each} value={each}>
                  {each}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="endDate">End Date</label>

            <select
              id="endDate"
              name="endDate"
              value={eduData.endDate}
              onChange={handleChange}
            >
              <option value="year">End Year</option> {/* Default option */}
              {yearsList.map((each) => (
                <option key={each} value={each}>
                  {each}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={eduData.city}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div>
        <button onClick={handleSubmit}>Add Education</button>
      </div>
    </>
  );
}
