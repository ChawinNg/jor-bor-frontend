import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState();
  useEffect(() => {
    const socket = io("ws://localhost:8000", {
      withCredentials: true,
    });
    setSocket(socket);
    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <SocketContext.Provider value={{ socket, setSocket }}>
      {children}
    </SocketContext.Provider>
  );
};
