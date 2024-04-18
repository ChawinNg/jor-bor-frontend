import Message from "@/components/chat/Message";
import { useAuth } from "@/contexts/AuthProvider";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function GhostMessageSection({ id }: { id: string }) {
  const [messages, setMessages] = useState<any>([]);
  const { user, setUser } = useAuth();

  useEffect(() => {
    // Create a socket connection
    const socket = io("ws://localhost:8000", {
      withCredentials: true,
    });
    socket.emit("joinGhost", id);
    // Listen for incoming messages
    socket.on("ghost message", (message: any) => {
      setMessages((prevMessages: any) => [...prevMessages, message]);
    });

    // Clean up the socket connection on unmount
    return () => {
      socket.disconnect();
    };
  }, [user]);
  return (
    <div className="flex h-full flex-col overflow-y-auto px-6">
      <div className="flex flex-col gap-4">
        {messages.map((item, index) => (
          <Message message={item} key={index} />
        ))}
      </div>
    </div>
  );
}
