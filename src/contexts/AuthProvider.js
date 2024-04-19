import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    async function getCurrentUser() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/users/me`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (!response.ok) {
          window.location.href = "http://localhost:3000";
          throw new Error("Failed to fetch current user");
        }
        const data = await response.json();
        console.log(data);
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    }
    getCurrentUser();
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
