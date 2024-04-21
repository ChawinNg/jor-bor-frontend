'use client'
import Image from "next/image";
import PlayerIcon from "./PlayerIcon";
import EmptyPlayerIcon from "./EmptyPlayerIcon";
import { useAuth } from "@/contexts/AuthProvider";
import { useSocket } from "@/contexts/SocketProvider";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function LobbyCampFire() {

  const { user, setUser } = useAuth();
  const { socket, setSocket } = useSocket();
  const [players, setPlayers] = useState<any>();
  const [total, setTotal] = useState<number>(0);

  const { id } = useParams();

  useEffect(() => {
    socket?.emit("joinLobby", id);
  }, [])

  useEffect(() => {
    socket?.on("lobbyUsers", (users: any) => {
      console.log(users);
      setPlayers(users);
      setTotal(users.length);
      // console.log(players);
    })
  })

  return (
    <div className="w-3/4 flex flex-col justify-center items-center gap-y-12">
      <div className="flex flex-row justify-center gap-x-24 w-full items-center">
        {players && total >= 1 ? (
          <PlayerIcon name={players[0].username} img={""} ready={players[0].ready} />
        ) : (
          <EmptyPlayerIcon />
        )}
        {players && total >= 2 ? (
          <PlayerIcon name={players[1].username} img={""} ready={players[1].ready} />
        ) : (
          <EmptyPlayerIcon />
        )}
      </div>
      <div className="flex flex-row justify-center items-center w-full">
        <div className="flex flex-col items-center gap-y-24">
          {players && total >= 3 ? (
            <PlayerIcon name={players[2].username} img={""} ready={players[2].ready} />
          ) : (
            <EmptyPlayerIcon />
          )}
          {players && total >= 4 ? (
            <PlayerIcon name={players[3].username} img={""} ready={players[3].ready} />
          ) : (
            <EmptyPlayerIcon />
          )}
        </div>
        <Image
          src="/img/lobby/campfire.svg"
          alt="campfire"
          width={500}
          height={358}
        />
        <div className="flex flex-col items-center gap-y-24">
          {players && total >= 5 ? (
            <PlayerIcon name={players[4].username} img={""} ready={players[4].ready} />
          ) : (
            <EmptyPlayerIcon />
          )}
          {players && total >= 6 ? (
            <PlayerIcon name={players[5].username} img={""} ready={players[5].ready} />
          ) : (
            <EmptyPlayerIcon />
          )}
        </div>
      </div>
      <div className="flex flex-row justify-center gap-x-24 w-full items-center">
        {players && total >= 7 ? (
          <PlayerIcon name={players[6].username} img={""} ready={players[6].ready} />
        ) : (
          <EmptyPlayerIcon />
        )}
        {players && total >= 8 ? (
          <PlayerIcon name={players[7].username} img={""} ready={players[7].ready} />
        ) : (
          <EmptyPlayerIcon />
        )}
      </div>
    </div>
  );
}
