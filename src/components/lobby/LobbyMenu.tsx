"use client";
import { useState, useEffect } from "react";
import InviteList from "./InviteList";
import LobbyChat from "./LobbyChat";
import getOneLobby from "@/services/lobbies/getOneLobby";
import leaveLobby from "@/services/lobbies/leaveLobby";
import { useRouter } from "next/navigation";

export default function LobbyMenu({ id }: { id: string }) {
  const [menu, setMenu] = useState<boolean>(false);
  const [isReady, setReady] = useState<boolean>(false);
  const [lobby, setLobby] = useState();

  const router = useRouter();

  useEffect(() => {
    const fetchLobby = async () => {
      const data = await getOneLobby(id);
      console.log(data);
      setLobby(data);
    }
    fetchLobby();
  }, [])

  const handleLeave = async () => {
    const response = await leaveLobby();
    console.log(response);
    router.push('/menu');
  }

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
      {menu && <LobbyChat id={id} />}
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
        onClick={() => {
          handleLeave();
        }}
      >
        Leave Lobby
      </button>
    </div>
  );
}
