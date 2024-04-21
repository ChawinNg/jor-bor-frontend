'use client'
import Image from "next/image";
import PlayerIcon from "./PlayerIcon";
import EmptyPlayerIcon from "./EmptyPlayerIcon";
import { useAuth } from "@/contexts/AuthProvider";
import { useSocket } from "@/contexts/SocketProvider";
import { useEffect, useState } from "react";

export default function LobbyCampFire() {

  const { user, setUser } = useAuth();
  const { socket, setSocket } = useSocket();
  const [players, setPlayers] = useState();

  // useEffect(() => {
  //   socket.on("joinLobby", )
  // })

  return (
    <div className="w-3/4 flex flex-col justify-center items-center gap-y-12">
      <div className="flex flex-row justify-center gap-x-24 w-full items-center">
        <PlayerIcon name={"ikkey"} img={""} ready={true} />
        <PlayerIcon name={"ikkey"} img={""} ready={false} />
      </div>
      <div className="flex flex-row justify-center items-center w-full">
        <div className="flex flex-col items-center gap-y-24">
          <PlayerIcon name={"ikkey"} img={""} ready={true} />
          <PlayerIcon name={"ikkey"} img={""} ready={false} />
        </div>
        <Image
          src="/img/lobby/campfire.svg"
          alt="campfire"
          width={500}
          height={358}
        />
        <div className="flex flex-col items-center gap-y-24">
          <PlayerIcon name={"ikkey"} img={""} ready={true} />
          <EmptyPlayerIcon />
        </div>
      </div>
      <div className="flex flex-row justify-center gap-x-24 w-full items-center">
        <EmptyPlayerIcon />
        <EmptyPlayerIcon />
      </div>
    </div>
  );
}
