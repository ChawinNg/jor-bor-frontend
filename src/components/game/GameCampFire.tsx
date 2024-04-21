import Image from "next/image";
import GamePlayerIcon from "./GamePlayerIcon";
import { useSocket } from "@/contexts/SocketProvider";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import EmptyGameIcon from "./EmptyGameIcon";

export default function GameCampFire() {
  const { socket, setSocket } = useSocket();
  const [players, setPlayers] = useState<any>();
  const [total, setTotal] = useState<number>(0);

  const { id } = useParams();

  useEffect(() => {
    socket?.on("inGameUsers", (users: any) => {
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
          <GamePlayerIcon name={players[0].username} img={""} ready={true} />
        ) : (
          <EmptyGameIcon />
        )}
        {players && total >= 2 ? (
          <GamePlayerIcon name={players[1].username} img={""} ready={true} />
        ) : (
          <EmptyGameIcon />
        )}
      </div>
      <div className="flex flex-row justify-center items-center w-full">
        <div className="flex flex-col items-center gap-y-24">
          {players && total >= 3 ? (
            <GamePlayerIcon name={players[2].username} img={""} ready={true} />
          ) : (
            <EmptyGameIcon />
          )}
          {players && total >= 4 ? (
            <GamePlayerIcon name={players[3].username} img={""} ready={true} />
          ) : (
            <EmptyGameIcon />
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
            <GamePlayerIcon name={players[4].username} img={""} ready={true} />
          ) : (
            <EmptyGameIcon />
          )}
          {players && total >= 6 ? (
            <GamePlayerIcon name={players[5].username} img={""} ready={true} />
          ) : (
            <EmptyGameIcon />
          )}
        </div>
      </div>
      <div className="flex flex-row justify-center gap-x-24 w-full items-center">
          {players && total >= 7 ? (
            <GamePlayerIcon name={players[6].username} img={""} ready={true} />
          ) : (
            <EmptyGameIcon />
          )}
          {players && total >= 8 ? (
            <GamePlayerIcon name={players[7].username} img={""} ready={true} />
          ) : (
            <EmptyGameIcon />
          )}
      </div>
    </div>
  );
}
