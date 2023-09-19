/* eslint-disable react/prop-types */
import { useState } from "react";
// import { EducationDetailsContext } from "../../Context/EducationDetails";

export default function Education() {
  const [eduData, setEduData] = useState({
    institute: "",
    degree: "",
    startDate: "",
    endDate: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEduData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
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
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={eduData.startDate}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={eduData.endDate}
            onChange={handleChange}
          />
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

      <button>Add</button>
    </div>
  );
}
