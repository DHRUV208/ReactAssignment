import { createContext, useState } from "react";

export const DataContext = createContext(null);
const DataProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    parentName: "",
    phoneNumber: "",
    mail: "",
    address: "",
  });

  const [addFamilyMember, setAddFamilyMember] = useState({
    firstName: "",
    lastName: "",
    age: 0,
  });

  return (
    <DataContext.Provider
      value={{
        userDetails,
        setUserDetails,
        addFamilyMember,
        setAddFamilyMember,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
