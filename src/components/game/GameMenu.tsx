"use client";
import { useState } from "react";
import GameChat from "./GameChat";
import PlayerRole from "./PlayerRole";

export default function GameMenu() {
  const [menu, setMenu] = useState<boolean>(false);
  const [isReady, setReady] = useState<boolean>(false);

  return (
    <div className="flex flex-col w-1/5 justify-center gap-y-5 h-full">
      <div className="flex flex-row bg-black gap-x-3 justify-center p-2 rounded-xl">
        <button
          className={`
            w-full py-2 rounded-xl font-bold ${!menu ? "bg-ui-red" : "bg-black"}
            `}
          onClick={() => {
            setMenu(false);
          }}
        >
          Role
        </button>
        <button
          className={`
          w-full py-2 rounded-xl font-bold ${menu ? "bg-ui-red" : "bg-black"}
          `}
          onClick={() => {
            setMenu(true);
          }}
        >
          Chat
        </button>
      </div>
      {!menu && <PlayerRole role={"seer"} />}
      {menu && <GameChat />}
    </div>
  );
}
