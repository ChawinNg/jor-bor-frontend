"use client";
import { useEffect, useState } from "react";
import GameChat from "./GameChat";
import PlayerRole from "./PlayerRole";
import GhostChat from "./ghost/GhostChat";
import { useTheme } from "@/contexts/ThemeProvider";
import { useSocket } from "@/contexts/SocketProvider";
import getOneLobby from "@/services/lobbies/getOneLobby";
import { useAuth } from "@/contexts/AuthProvider";

enum Role {
  Werewolf,
  Villager,
  Seer,
  // add more roles here
}

export default function GameMenu({ id }: { id: string }) {
  const { theme, setTheme } = useTheme();
  const { user, setUser } = useAuth();
  const { socket, setSocket } = useSocket();
  const [menu, setMenu] = useState<string>("role");
  const [isStarted, setStarted] = useState<boolean>(false);
  const isGhost = true;

  const [lobby, setLobby] = useState<any>();

  const [players, setPlayers] = useState<any>();
  const [total, setTotal] = useState<number>(0);

  const [playerInfo, setPlayerInfo] = useState<any>();

  const [timer, setTimer] = useState<number | null>(null);

  function changeMode(theme: string) {
    if (theme == "day") {
      document.body.style.backgroundColor = "#F3EEF4";
      setTheme("day");
    }
    if (theme == "night") {
      document.body.style.backgroundColor = "#1a1a1d";
      setTheme("night");
    }
  }

  useEffect(() => {
    const fetch = async () => {
      const data = await getOneLobby(id);
      setLobby(data);
    }
    fetch();
  }, []);

  useEffect(() => {
    socket?.on("inGameUsers", (users: any) => {
      console.log(users);
      setPlayers(users);
      setTotal(users.length);
      // console.log(players);
    })
  })

  useEffect(() => {
    socket?.on("assignRole", (info: any) => {
      console.log(info);
      setPlayerInfo(info);
    })
  })

  useEffect(() => {
    console.log('try to start', total)
    console.log(lobby)
    console.log(isStarted)
    console.log(user)

    if (lobby && lobby.players.length === total && !isStarted && user.data._id === lobby.owner) {
      console.log('start');
      socket.emit("start", id);
      setStarted(true);
    }
  }, [total])

  useEffect(() => {
    socket?.on('votingTimer', (newTimer: number) => {
      setTimer(newTimer);
      changeMode('day')
    });
  });

  useEffect(() => {
    socket?.on('votingEnded', () => {
      setTimer(null);
    })
  })
  
  useEffect(() => {
    socket?.on('killingTimer', (newTimer: number) => {
      setTimer(newTimer);
      changeMode('night');
    });
  })

  useEffect(() => {
    socket?.on('killingEnded', () => {
      setTimer(null);
    })
  })

  return (
    <div className="flex flex-col w-1/5 justify-center gap-y-5 h-full">
      {timer !== null ? (
        <div className={`${
          theme === 'night' ? 
          'text-ui-text-light' :
          'text-ui-text-dark'
        }`}>
          Voting Countdown: {timer} s
        </div>
      ) : null
      }
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
      {menu == "role" && playerInfo && <PlayerRole role={Role[playerInfo.role]} />}
      {menu == "chat" && <GameChat id={id} />}
      {menu == "ghost" && <GhostChat id={id} />}
    </div>
  );
}
