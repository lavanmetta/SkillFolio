// BasicDetails.js
import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

export const BasicDetailsContext = createContext({
  name: "",
  email: "",
  setName: () => {},
  setEmail: () => {},
});

export const BasicDetailsProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  console.log(children)

  return (
    <BasicDetailsContext.Provider value={{ name, email, setName, setEmail }}>
      {children}
    </BasicDetailsContext.Provider>
  );
};

BasicDetailsProvider.propTypes = {
  children: PropTypes.array,
};
