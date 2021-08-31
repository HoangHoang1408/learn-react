import React, { useEffect, useState } from "react";
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
});
export const AuthContextProvider = (props) => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  useEffect(() => {
    localStorage.getItem("isLoggedIn") === "1"
      ? setIsLogedIn(true)
      : setIsLogedIn(false);
  }, []);
  const handleLogin = function () {
    setIsLogedIn(true);
    localStorage.setItem("isLoggedIn", "1");
  };
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLogedIn(false);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLogedIn,
        onLogout: handleLogout,
        onLogin: handleLogin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
