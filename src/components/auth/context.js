import React, { useContext } from 'react';

const AuthContext = React.createContext();

/*
export const AuthContextProvider = AuthContext.Provider;
export const AuthContextConsumer = AuthContext.Consumer;

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};
*/


export const AuthContextProvider = ({ children, ...props}) => (
  <AuthContext.Provider value={props}>
    {children}
  </AuthContext.Provider>
);

export const useAuthContext = () => {
  const auth_value = React.useContext(AuthContext)
  return auth_value;
}


export const AuthContextConsumer = AuthContext.Consumer;

export default AuthContext;
