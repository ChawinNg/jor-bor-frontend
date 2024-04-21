import { Key, useEffect, useRef, useState } from "react";
import Message from "../chat/Message";
import { useAuth } from "@/contexts/AuthProvider";
import { Messages } from "@/models/Message";
import { useSocket } from "@/contexts/SocketProvider";

export default function LobbyMessageSection({ id }: { id: string }) {
  const [messages, setMessages] = useState<any>([]);
  const { user, setUser } = useAuth();
  const { socket, setSocket } = useSocket();
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Listen for incoming messages
    socket.on("lobby message", (message: any) => {
      setMessages((prevMessages: any) => [...prevMessages, message]);
    });
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
