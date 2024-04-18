import { Key, useEffect, useRef, useState } from "react";
import Message from "../chat/Message";
import { useAuth } from "@/contexts/AuthProvider";
import { io } from "socket.io-client";
import { useSocket } from "@/contexts/SocketProvider";
import { Messages } from "@/models/Message";

export default function GameMessageSection({ id }: { id: string }) {
  const [messages, setMessages] = useState<any>([]);
  const { user, setUser } = useAuth();
  const { socket, setSocket } = useSocket();
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Create a socket connection
    // const socket = io("ws://localhost:8000", {
    //   withCredentials: true,
    // });
    socket.emit("joinGame", id);
    // Listen for incoming messages
    socket.on("game message", (message: any) => {
      setMessages((prevMessages: any) => [...prevMessages, message]);
    });

    // Clean up the socket connection on unmount
    // return () => {
    //   socket.disconnect();
    // };
  }, [user, socket]);

  useEffect(() => {
    scrollToBottom();
  });
  return (
    <div className="flex h-full flex-col overflow-y-auto px-6">
      <div className="flex flex-col gap-4">
        {messages.map((item: Messages, index: Key | null | undefined) => (
          <Message message={item} key={index} />
        ))}
      </div>
      <div ref={bottomRef} />
    </div>
  );
}
