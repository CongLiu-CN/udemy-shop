import { createContext, useState, useEffect } from 'react';

export const CollegeContext = createContext({
  college: {}
});

export const CollegeProvider = ({ children }) => {
  const [college, setCollege] = useState({})

  useEffect(() => {
    setCollege({ name: 'Conestoga College', abbreviation: 'CC' })
  }, []);

  const value = { college };

  return <CollegeContext.Provider value={value}>{children}</CollegeContext.Provider>;
};
