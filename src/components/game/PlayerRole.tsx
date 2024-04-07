"use client";
import { useTheme } from "@/contexts/ThemeProvider";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function PlayerRole({ role }: { role: string }) {
  const { theme, setTheme } = useTheme();
  const [img, setImg] = useState<string>("");
  const [info, setInfo] = useState<string>("");

  useEffect(() => {
    setRole();
  });
  function setRole() {
    if (role == "werewolf") {
      let tmp1 = "/img/game/werewolf.svg";
      let tmp2 =
        "The goal of the werewolves is to decide together on one villager to secretly kill off during the night, while posing as villagers during the day so they're not killed off themselves. One by one they'll kill off villagers and win when there are either the same number of villagers and werewolves left, or all the villagers have died. This role is the hardest of all to maintain, because these players are lying for the duration of the game.";
      setImg(tmp1);
      setInfo(tmp2);
    }
    if (role == "seer") {
      let tmp1 = "/img/game/seer.svg";
      let tmp2 =
        "The Seer, while first and foremost a villager, has the added ability to 'see' who the werewolves are once night falls. When called awake by the Moderator, the Seer can point to any of their fellow players and the Moderator must nod yes or no as to whether or not they are indeed a Werewolf. The Seer can then choose to keep this information a secret during the day, or reveal themselves as the Seer and use the knowledge they gained during the night in their defense or to their advantage during the day. The strategy here is up to you.";
      setImg(tmp1);
      setInfo(tmp2);
    }
    if (role == "villager") {
      let tmp1 = "/img/game/villager.svg";
      let tmp2 =
        "The most commonplace role, a simple Villager, spends the game trying to root out who they believe the werewolves (and other villagers) are. While they do not need to lie, the role requires players to keenly sense and point out the flaws or mistakes of their fellow players. Someone is speaking too much? Could mean they're a werewolf. Someone isn't speaking enough? Could mean the same thing. It all depends on the people you're playing with, and how well you know them.";
      setImg(tmp1);
      setInfo(tmp2);
    }
  }
  return (
    <div
      className={`flex flex-col h-3/4 bg-black gap-x-3 gap-y-4  items-center p-4 rounded-xl ${
        theme == "night"
          ? "bg-black"
          : "bg-white text-black border-1 border-ui-red"
      }`}
    >
      <div className="w-full text-2xl font-bold text-center">{role}</div>
      <span className="w-full border-t border-ui-text-light"></span>
      <div className="flex flex-col">
        <Image src={img} width={160} height={160} alt="role" />
      </div>
      <div className="text-justify px-4 overflow-auto">{info}</div>
    </div>
  );
}
