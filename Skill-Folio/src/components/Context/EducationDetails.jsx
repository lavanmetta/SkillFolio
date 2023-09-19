import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const EducationDetailsContext = createContext({
  educationDetails: [
    {
      degree: "",
      institute: "",
      startDate: "",
      endDate: "",
      city: "",
    },
  ],
});

export const EducationDetailsProvider = ({ children }) => {
  const [educationDetails, setEducationDetails] = useState([]);

  return (
    <EducationDetailsContext.Provider
      value={{ educationDetails, setEducationDetails }} // Include setEducationDetails in the context
    >
      {children}
    </EducationDetailsContext.Provider>
  );
};

EducationDetailsProvider.propTypes = {
  children: PropTypes.node,
};
