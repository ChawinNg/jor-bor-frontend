import { useEffect, useState } from "react";
import MessageSection from "./MessageSection";
import TextFieldSection from "./TextFieldSection";
import { io } from "socket.io-client";
import { useSocket } from "@/contexts/SocketProvider";

export default function PrivateChat({ id }: { id: string }) {
  const { socket, setSocket } = useSocket();

  return (
    <div className="w-4/6 flex flex-col h-5/6 gap-y-4">
      <div className="w-full text-2xl font-bold">{id}</div>
      <span className="w-full border-t border-ui-text-light"></span>
      <MessageSection socket={socket} id={id} />
      <span className="w-full border-t border-ui-text-light"></span>
      <TextFieldSection socket={socket} id={id} />
    </div>
  );
}
