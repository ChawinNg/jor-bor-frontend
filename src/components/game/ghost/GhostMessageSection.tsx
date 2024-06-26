import Message from "@/components/chat/Message";
import { useAuth } from "@/contexts/AuthProvider";
import { useSocket } from "@/contexts/SocketProvider";
import { Messages } from "@/models/Message";
import { Key, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

export default function GhostMessageSection({ id }: { id: string }) {
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
    socket.emit("joinGhost", id);
    // Listen for incoming messages
    socket.on("ghost message", (message: any) => {
      setMessages((prevMessages: any) => [...prevMessages, message]);
    });

    // Clean up the socket connection on unmount
    return () => {
      socket.disconnect();
    };
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
