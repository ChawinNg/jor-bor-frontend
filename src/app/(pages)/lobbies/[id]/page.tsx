"use client";

import LobbyCampFire from "@/components/lobby/LobbyCampFire";
import LobbyMenu from "@/components/lobby/LobbyMenu";
import { useSocket } from "@/contexts/SocketProvider";
import { useEffect } from "react";

export default function LobbyPage({ params }: { params: { id: string } }) {
  const { socket } = useSocket();

  useEffect(() => {
    socket?.emit("joinLobby", { to: params.id });
  }, [params.id, socket]);

  return (
    <div className="flex flex-row h-screen justify-center items-center gap-y-8 gap-x-24 px-24">
      <LobbyMenu id={params.id} />
      <LobbyCampFire />
    </div>
  );
}
