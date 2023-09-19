// BasicDetails.js
import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

export const BasicDetailsContext = createContext({
  name: "",
  email: "",
  phoneNumber: "",
  city: "",
  country: "",
  jobProfile: "",
});

export const BasicDetailsProvider = ({ children }) => {
  const [basicDetails, setBasicDetails] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    city: "",
    country: "",
    jobProfile: "",
    summary: "",
  });

  return (
    <BasicDetailsContext.Provider value={{ basicDetails, setBasicDetails }}>
      {children}
    </BasicDetailsContext.Provider>
  );
};

BasicDetailsProvider.propTypes = {
  children: PropTypes.array,
};
