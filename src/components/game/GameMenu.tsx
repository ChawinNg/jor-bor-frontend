"use client";
import { useState } from "react";
import GameChat from "./GameChat";
import PlayerRole from "./PlayerRole";
import GhostChat from "./ghost/GhostChat";
import { useTheme } from "@/contexts/ThemeProvider";

export default function GameMenu({ id }: { id: string }) {
  const { theme, setTheme } = useTheme();
  const [menu, setMenu] = useState<string>("role");
  const [isReady, setReady] = useState<boolean>(false);
  const isGhost = true;

  return (
    <div className="flex flex-col w-1/5 justify-center gap-y-5 h-full">
      <div
        className={`flex flex-row  gap-x-3 justify-center p-2 rounded-xl ${
          theme == "night" ? "bg-black" : "bg-white border-1 border-ui-red"
        }`}
      >
        <button
          className={`
            w-full py-2 rounded-xl font-bold ${
              menu == "role"
                ? "bg-ui-red"
                : theme == "night"
                ? "bg-black"
                : "bg-white text-ui-text-light"
            } 
            `}
          onClick={() => {
            setMenu("role");
          }}
        >
          Role
        </button>
        <button
          className={`
          w-full py-2 rounded-xl font-bold ${
            menu == "chat"
              ? "bg-ui-red"
              : theme == "night"
              ? "bg-black"
              : "bg-white text-ui-text-light"
          }
          `}
          onClick={() => {
            setMenu("chat");
          }}
        >
          Chat
        </button>
        {isGhost && (
          <button
            className={`
          w-full py-2 rounded-xl font-bold ${
            menu == "ghost"
              ? "bg-ui-red"
              : theme == "night"
              ? "bg-black"
              : "bg-white text-ui-text-light"
          }
          `}
            onClick={() => {
              setMenu("ghost");
            }}
          >
            Ghost Chat
          </button>
        )}
      </div>
      {menu == "role" && <PlayerRole role={"seer"} />}
      {menu == "chat" && <GameChat id={id} />}
      {menu == "ghost" && <GhostChat />}
    </div>
  );
}
