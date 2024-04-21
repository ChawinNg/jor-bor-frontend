import { useTheme } from "@/contexts/ThemeProvider";
import Image from "next/image";
import { useEffect, useState } from "react";
import SocketService from "@/services/sockets/socket";
import { io } from "socket.io-client";
import { useAuth } from "@/contexts/AuthProvider";
import { useSocket } from "@/contexts/SocketProvider";

export default function LobbyTextFieldSection({ id }: { id: string }) {
  const { theme, setTheme } = useTheme();
  const [message, setMessage] = useState<string>("");
  const { socket, setSocket } = useSocket();
  const { user, setUser } = useAuth();

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  useEffect(() => {
    socket.emit("joinLobby", id);
  }, []);

  const sendMessage = () => {
    if (message.trim().length > 0) {
      if (socket) {
        socket.emit(
          "lobby message",
          {
            user: user.data.username,
            message: message,
            time: new Date(Date.now()),
          },
          id
        );
      }
    }
    setMessage("");
  };
  return (
    <div className="flex flex-row gap-x-4 px-4 py-2 ">
      <input
        type="text"
        className={`h-12 w-full rounded-xl border-1 px-4 placeholder:text-ci-dark-gray ${
          theme == "night" ? "bg-black border-white" : "bg-white  border-ui-red"
        }`}
        placeholder="Type message here..."
        autoFocus
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        onKeyDown={onKeyDownHandler}
      />

      <button className="hover:bg-black rounded-xl px-2">
        <Image
          src={
            theme == "night"
              ? "/img/chat/send-icon.svg"
              : "/img/chat/send-icon-red.svg"
          }
          alt="send"
          width={40}
          height={40}
          className="cursor-pointer"
          onClick={() => {
            sendMessage();
          }}
        />
      </button>
    </div>
  );
}
