import { Key, useEffect, useRef, useState } from "react";
import Message from "./Message";
import io from "socket.io-client";
import { Messages } from "@/models/Message";
import { useAuth } from "@/contexts/AuthProvider";

export default function MessageSection({
  socket,
  id,
}: {
  socket: any;
  id: string;
}) {
  const [messages, setMessages] = useState<any>([]);
  const { user, setUser } = useAuth();
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    socket?.on("private message", (message: any) => {
      if (user) {
        if (
          (message.to === user.data.username ||
            message.user === user.data.username) &&
          (message.to === id || message.user === id)
        ) {
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
