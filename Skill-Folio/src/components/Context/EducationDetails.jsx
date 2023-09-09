import { createContext } from "react";
import { useState } from "react";
import { PropTypes } from "prop-types";



export const EducationDetailsContext = createContext({
  instituteName: "",
  degree: "",
  startDate: "",
  endDate: "",
  city: "",
});

export const EducationDetailsProvider = ({ children }) => {
  const [educationDetails, setEducationDetails] = useState({
    instituteName: "",
    degree: "",
    startDate: "",
    endDate: "",
    city: "",
  });
  return (
    <EducationDetailsContext.Provider
      value={{ educationDetails, setEducationDetails }}
    >
      {children}
    </EducationDetailsContext.Provider>
  );
};

EducationDetailsProvider.propTypes = {
  children: PropTypes.array,
};
