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
        console.log(response)
        if (!response.ok) {
          throw new Error("Failed to fetch current user");
        }
        setUser(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    getCurrentUser();
  })
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
