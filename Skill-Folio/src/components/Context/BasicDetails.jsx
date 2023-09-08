// BasicDetails.js
import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

export const BasicDetailsContext = createContext({
  name: "",
  email: "",
  phoneNumber: "",
  city: "",
  country: "",
  jobProfile : "",
  setBasicDetails: () => {},
});

export const BasicDetailsProvider = ({ children }) => {
  const [basicDetails, setBasicDetails] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    city: "",
    country: "",
    jobProfile: '',
    summary : ''
  });

  console.log(children);

  return (
    <BasicDetailsContext.Provider value={{ basicDetails, setBasicDetails }}>
      {children}
    </BasicDetailsContext.Provider>
  );
};

BasicDetailsProvider.propTypes = {
  children: PropTypes.array,
};
