import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useAuth } from "./AuthProvider";

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState();
  const { user, setUser } = useAuth();

  useEffect(() => {
    const socket = io("ws://localhost:8000", {
      withCredentials: true,
      autoConnect: false,
    });
    setSocket(socket);
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (user) {
      const username = user.data.username;
      const user_id = user.data._id;
      socket.auth = { username, user_id };
      socket.connect();
      console.log(socket.auth);
    }
  }, [user, socket]);
  return (
    <SocketContext.Provider value={{ socket, setSocket }}>
      {children}
    </SocketContext.Provider>
  );
};
