import { createContext, useEffect, useReducer } from 'react'; //removed useState, added useReducer

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const USER_ACTION_TYPES = { //added
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

const INITIAL_STATE = { //added
  currentUser: null,
};

const userReducer = (state, action) => { //added
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

export const UserProvider = ({ children }) => {
  //removed const [currentUser, setCurrentUser] = useState(null)
  //removed value = {currentUser, setCurrentUser}
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);  //added

  const setCurrentUser = (user) => //added
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, currentUser: user }); 

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

/*
const userReducer = (state, action) => {
  return {
    currentUser: .
  }
}
*/