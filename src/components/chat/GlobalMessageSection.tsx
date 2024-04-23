import { Key, useEffect, useRef, useState } from "react";
import Message from "./Message";
import io from "socket.io-client";
import { Messages } from "@/models/Message";
import { useAuth } from "@/contexts/AuthProvider";

export default function MessageSection({ socket }: { socket: any }) {
  const [messages, setMessages] = useState<any>([]);
  const { user, setUser } = useAuth();
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    socket?.on("global message", (message: any) => {
      if (user) {
        {
          setMessages((prevMessages: any) => [...prevMessages, message]);
        }
      }
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
