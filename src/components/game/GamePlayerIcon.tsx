"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import NightBegun from "./NightBegun";
import KillPlayer from "./werewolf/KillPlayer";
import SeeRole from "./seer/SeeRole";
import NightOver from "./NightOver";
import { useTheme } from "@/contexts/ThemeProvider";
import VotePlayer from "./vote/VotePlayer";
import PlayerKill from "./announce/PlayerKilled";
import { useSocket } from "@/contexts/SocketProvider";

enum Role {
  Werewolf,
  Villager,
  Seer,
  // add more roles here
}

export default function GamePlayerIcon({
  name, // name : {socketID, username, userId},
  info,
  img,
  isNight,
  handler,
}: {
  name: any;
  info: any; // info of player : {socketID, username, userId, role, alive}
  img: string;
  isNight: boolean;
  handler: Function;
}) {
  const { theme, setTheme } = useTheme();
  // const [isNight, setNight] = useState<boolean>(false);
  const [isSelect, setSelect] = useState<boolean>(false);
  const [isAlive, setAlive] = useState<boolean>(true);

  const { socket, setSocket } = useSocket();

  const handleSelect = (uid: string) => {
    if (isNight) {
      if (info.role === Role.Werewolf) {
        handler(uid);
      }
    } else {
      handler(uid);
    }
  }

  // day vote
  useEffect(() => {
    socket?.on('targetVoted', (votedPlayerId: string) => {
      if (votedPlayerId === name.userId) {
        setAlive(false);
        alert(`player ${name.username} has been voted off`)
      }
      // setAlive(votedPlayerId !== name.socketID);
    })
  })

  // werewolf kill
  useEffect(() => {
    socket?.on('targetKilled', (votedPlayerId: string) => {
      // if (votedPlayerId === name.socketID) {
      if (votedPlayerId === name.userId) {
        setAlive(false);
        alert(`player ${name.username} has been killed at night`)
      }
      // setAlive(votedPlayerId !== name.socketID);
    })
  })

  return (
    <div className={`flex flex-col justify-center items-center gap-y-2 ${info.alive ? 'cursor-pointer' : 'cursor-default'}`}>
      <div
        className={`relative flex aspect-square w-24 items-center justify-center overflow-hidden rounded-full ${isAlive ? 'bg-ui-red' : 'bg-ui-gray'} ${
          isSelect
            ? theme == "night"
              ? "border-8 border-white"
              : "border-8 border-black"
            : ""
        }`}
        onClick={() => {
          if (info.alive) {
            setSelect(!isSelect);
            // setNight(!isNight);
            handleSelect(name.userId);
          }
        }}
      >
        <Image
          src="/img/home/logo.svg"
          alt={"accountMenu"}
          draggable={false}
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={`${theme == "night" ? "text-white" : "text-black"}`}>
        {name.username}
      </div>
      {/* {isNight && <NightBegun setNight={setNight}/>} */}
      {/* {isNight && <NightOver setNight={setNight} />} */}
      {/* {isNight && <KillPlayer setKill={setNight} />} */}
      {/* {isNight && <SeeRole setSee={setNight} role={"villager"} />} */}
      {/* {isNight && <VotePlayer setKill={setNight} />} */}
      {/* {isNight && <PlayerKill setKill={setNight} />} */}
    </div>
  );
}
