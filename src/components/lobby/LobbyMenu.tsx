"use client";
import { useState } from "react";
import InviteList from "./InviteList";
import LobbyChat from "./LobbyChat";
import { lobbyReady, lobbyUnready } from "@/services/lobbyStatus";
import { leaveLobby } from "@/services/manageLobby";

export default function LobbyMenu() {
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
          Invite
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
      {!menu && <InviteList code={"123456"} />}
      {menu && <LobbyChat />}
      <button
        className={`py-3 w-full rounded-xl ${
          isReady ? "bg-ui-red" : "bg-white text-black"
        }`}
        onClick={() => {
          setReady(!isReady);
          isReady ? lobbyReady() : lobbyUnready();
        }}
      >
        {isReady ? "Ready" : "Not Ready"}
      </button>
      <button
        className="py-3 w-full rounded-xl border-1 border-white"
        onClick={leaveLobby}
      >
        Leave Lobby
      </button>
    </div>
  );
}
