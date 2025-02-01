import { createContext, useState, useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  console.log("🚀 ~ file: user.context.jsx:11 ~ UserProvider ~ currentUser:", currentUser)
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    // check for auth changes and update the user state
    const unsubscribe = onAuthStateChangedListener((user)=> {
      console.log({user});
      if(user) {
        createUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
    })
    // end listener
    return unsubscribe

  },[])
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}