"use client";
import GameCampFire from "@/components/game/GameCampFire";
import GameMenu from "@/components/game/GameMenu";
import { useAuth } from "@/contexts/AuthProvider";
import { useSocket } from "@/contexts/SocketProvider";
import { useTheme } from "@/contexts/ThemeProvider";
import { useEffect } from "react";

export default function GamePage({ params }: { params: { id: string } }) {
  const { theme, setTheme } = useTheme();
  const { user, setUser } = useAuth();
  const { socket, setSocket } = useSocket();

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

  // useEffect(() => {
  //   if (user.data._id === params.id) {
  //     // socket.emit("hostStart", params.id);
  //     socket?.emit('joinGame', )
  //   }
  // })

  // useEffect(() => {
  //   socket?.emit("joinGame", params.id);
  // }, [params.id, socket]);

  useEffect(() => {
    socket?.on('votingTimer', (newTimer: number) => {
      changeMode('day');
    });
  })

  useEffect(() => {
    socket?.on('killingTimer', (newTimer: number) => {
      changeMode('night');
    });
  })


  return (
    <div className="flex flex-row h-screen justify-center items-center gap-y-8 gap-x-24 px-20">
      <GameMenu id={params.id}/>
      <GameCampFire />
      <button
        className="text-ui-red absolute right-0 px-4"
        onClick={() => changeMode(theme)}
      >
        {/* test1 */}
      </button>
    </div>
  );
}
