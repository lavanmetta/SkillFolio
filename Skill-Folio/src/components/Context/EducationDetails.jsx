import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const EducationDetailsContext = createContext({
  educationDetails: [
    {
      degree: "Bachelor of Science",
      institute: "Example University",
      startDate: "2020-09-01",
      endDate: "2024-05-31",
      city: "Example City",
    },
  ],
  addEducationDetail: () => {},
  setEducationDetails: () => {}, // Add this function
});

export const EducationDetailsProvider = ({ children }) => {
  const [educationDetails, setEducationDetails] = useState([]);

  const addEducationDetail = (newEducationDetail) => {
    setEducationDetails([...educationDetails, newEducationDetail]);
  };

  return (
    <EducationDetailsContext.Provider
      value={{ educationDetails, addEducationDetail, setEducationDetails }} // Include setEducationDetails in the context
    >
      {children}
    </EducationDetailsContext.Provider>
  );
};

EducationDetailsProvider.propTypes = {
  children: PropTypes.node,
};
