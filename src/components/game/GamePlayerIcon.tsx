"use client";
import Image from "next/image";
import { useState } from "react";
import NightBegun from "./NightBegun";
import KillPlayer from "./werewolf/KillPlayer";
import SeeRole from "./seer/SeeRole";
import NightOver from "./NightOver";
import { useTheme } from "@/contexts/ThemeProvider";
import VotePlayer from "./vote/VotePlayer";
import PlayerKill from "./announce/PlayerKilled";

export default function GamePlayerIcon({
  name,
  img,
  ready,
}: {
  name: string;
  img: string;
  ready: boolean;
}) {
  const { theme, setTheme } = useTheme();
  const [isNight, setNight] = useState<boolean>(false);
  const [isSelect, setSelect] = useState<boolean>(false);
  return (
    <div className="flex flex-col justify-center items-center gap-y-2 cursor-pointer">
      <div
        className={`relative flex aspect-square w-24 items-center justify-center overflow-hidden rounded-full bg-ui-red ${
          isSelect
            ? theme == "night"
              ? "border-8 border-white"
              : "border-8 border-black"
            : ""
        }`}
        onClick={() => {
          setSelect(!isSelect);
          setNight(!isNight);
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
        {name}
      </div>
      {/* {isNight && <NightBegun setNight={setNight}/>} */}
      {/* {isNight && <NightOver setNight={setNight} />} */}
      {/* {isNight && <KillPlayer setKill={setNight} />} */}
      {/* {isNight && <SeeRole setSee={setNight} role={"villager"} />} */}
      {/* {isNight && <VotePlayer setKill={setNight} />} */}
      {isNight && <PlayerKill setKill={setNight} />}
    </div>
  );
}
