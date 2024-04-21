"use client";
import { useState, useEffect } from "react";
import InviteList from "./InviteList";
import LobbyChat from "./LobbyChat";
import getOneLobby from "@/services/lobbies/getOneLobby";
import leaveLobby from "@/services/lobbies/leaveLobby";
import { useRouter } from "next/navigation";
import { useSocket } from "@/contexts/SocketProvider";
import { useAuth } from "@/contexts/AuthProvider";

export default function LobbyMenu({ id }: { id: string }) {
  const [menu, setMenu] = useState<boolean>(false);
  const [isReady, setReady] = useState<boolean>(false);
  const [lobby, setLobby] = useState<any>();
  const { user, setUser } = useAuth();
  const { socket, setSocket } = useSocket();
  const [code, setCode] = useState<string | null>(null);
  const [players, setPlayers] = useState<any>();
  const [total, setTotal] = useState<number>(0);
  const [canStart, setCanStart] = useState<boolean>(false);

  const router = useRouter();

  const handleCode = () => {
    if (lobby && lobby.lobby_code) {
      setCode(lobby.lobby_code);
    }
  }

  const checkStart = () => {
    if (players) {
      for (let player of players) {
        if (!player.ready) {
          setCanStart(false);
          return;
        }
        setCanStart(true);
      }
    }
  }

  useEffect(() => {
    const fetchLobby = async () => {
      const data = await getOneLobby(id);
      setLobby(data);
    }
    fetchLobby();
    handleCode();
  }, [])

  useEffect(() => {
    console.log(lobby)
  }, [lobby])

  useEffect(() => {
    if (isReady) {
      socket?.emit("ready", id);
    } else {
      socket?.emit("notReady", id);
    }
  }, [isReady])

  useEffect(() => {
    socket?.on("lobbyUsers", (users: any) => {
      console.log(users);
      setPlayers(users);
      setTotal(users.length);
      // console.log(players);
    })
    checkStart();

    socket?.on("startGame", () => {
      window.location.href = `${process.env.NEXT_PUBLIC_HTTP_FRONTEND_HOST}/games/${id}`;
    })
  })

  const handleLeave = async () => {
    const response = await leaveLobby();
    console.log(response);
    socket.emit("leaveLobby", id);
    window.location.href = `${process.env.NEXT_PUBLIC_HTTP_FRONTEND_HOST}/menu`;
  }

  return (
    <div className="flex flex-col w-1/5 justify-center gap-y-5 h-full">
      {lobby && user && lobby.owner === user.data._id && 
        <button
        className={`py-3 w-full rounded-xl ${
          canStart ? "bg-ui-red" : "bg-white text-black"
        }`}
        onClick={() => {
          socket.emit("hostStart", id);
          window.location.href = `${process.env.NEXT_PUBLIC_HTTP_FRONTEND_HOST}/games/${id}`;
        }}
        >
          Start Game
        </button>
      }
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
      {!menu && lobby && <InviteList players={players} max={lobby.max_player} code={code} />}
      {menu && <LobbyChat id={id} />}
      <button
        className={`py-3 w-full rounded-xl ${
          isReady ? "bg-ui-red" : "bg-white text-black"
        }`}
        onClick={() => {
          setReady(!isReady);
          // isReady ? lobbyReady() : lobbyUnready();
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
