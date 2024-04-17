import { useEffect, useState } from "react";
import Message from "./Message";
import io from "socket.io-client";

export default function MessageSection() {
  const mess = [
    ["Hello Im ik Hello Im ik Hello Im ik Hello Im ik", true, "Masato"],
    ["Hello", false, "Seiichi", "7:06 pm"],
    ["Hello Im ik", true, "Masato", "7:06 pm"],
    ["Hello Im ik", true, "Masato", "7:06 pm"],
    ["Hello", false, "Shinobu", "7:06 pm"],
    ["Hello", false, "Seiichi", "7:06 pm"],
    ["Hello Im ik", true, "Masato", "7:06 pm"],
    ["Hello", false, "Shinobu", "7:06 pm"],
    ["Hello Im ik", true, "Masato", "7:06 pm"],
    ["Hello Im ik", true, "Masato", "7:06 pm"],
    ["Hello", false, "Seiichi", "7:06 pm"],
    ["Hello", false, "Shinobu", "7:06 pm"],
    ["Hello Im ik", true, "Masato", "7:06 pm"],
    ["Hello", false, "Seiichi", "7:06 pm"],
    ["Hello Im ik", true, "Masato", "7:06 pm"],
    ["Hello Im ik", true, "Masato", "7:06 pm"],
    ["Hello", false, "Seiichi", "7:06 pm"],
    ["Hello", false, "Shinobu", "7:06 pm"],
    ["Hello Im ik", true, "Masato", "7:06 pm"],
    ["Hello", false, "Shinobu", "7:06 pm"],
    ["Hello Im ik", true, "Masato", "7:06 pm"],
    ["Hello Im ik", true, "Masato", "7:06 pm"],
    ["Hello", false, "Seiichi", "7:06 pm"],
    ["Hello", false, "Shinobu", "7:06 pm"],
  ];

  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    // Create a socket connection
    const socket = io("ws://localhost:8000", {
      withCredentials: true,
    });

    // Listen for incoming messages
    socket.on("message", (message: any) => {
      setMessages((prevMessages: any) => [...prevMessages, message]);
    });

    // Clean up the socket connection on unmount
    return () => {
      socket.disconnect();
    };
  }, []);

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
