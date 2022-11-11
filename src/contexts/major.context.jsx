import { createContext, useState, useEffect } from "react";

export const MajorContext = createContext({
  major: {}
})

export const MajorProvider = ({ children }) => {
  const [major, setMajor] = useState({})

  useEffect(() => {
    setMajor({ name: 'Computer Application Development'})
  }, []);

  const value = {major};

  return <MajorContext.Provider value={value}>{children}</MajorContext.Provider>
}