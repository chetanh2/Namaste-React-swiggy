// import { Children, createContext, useContext } from "react";

// const UserContext = createContext({loggedInUser: "Default user",Children})

// export function userDetailsContext() {
//     return useContext(UserContext);
// }

// return(
//     <UserContext.Provider value={{ loggedInUser: userName,setUserName }}>
//         {Children}
//     </UserContext.Provider>
// )
// export default UserContext

import { createContext, useContext, useState } from "react";

// Create the context
const UserContext = createContext({ loggedInUser: "Default user" });

// A custom hook to use the UserContext
export function useUserDetails() {
  return useContext(UserContext);
}

// UserProvider component to wrap around the children that need access to the context
export function UserProvider({ children }) {
  const [userName, setUserName] = useState("Default user");

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
