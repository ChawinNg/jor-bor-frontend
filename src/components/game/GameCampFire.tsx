import Image from "next/image";
import GamePlayerIcon from "./GamePlayerIcon";
import { useSocket } from "@/contexts/SocketProvider";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import EmptyGameIcon from "./EmptyGameIcon";
import { useAuth } from "@/contexts/AuthProvider";
import { useTheme } from "@/contexts/ThemeProvider";

enum Role {
  Werewolf,
  Villager,
  Seer,
  // add more roles here
}

export default function GameCampFire() {
  const { user, setUser } = useAuth();
  const { socket, setSocket } = useSocket();
  const { theme, setTheme } = useTheme();
  const [players, setPlayers] = useState<any[]>();
  const [total, setTotal] = useState<number>(0);
  const [playerInfo, setPlayerInfo] = useState<any>();

  const [target, setTarget] = useState<string>("");
  const [canVote, setCanVote] = useState<boolean>(false);
  const [canKill, setCanKill] = useState<boolean>(false);
  const [canCheck, setCanCheck] = useState<boolean>(false);

  const [timer, setTimer] = useState<number | null>(null);
  const [isNight, setNight] = useState<boolean>(false);

  const { id } = useParams();

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

  // ---------------- DONT EVER DARE TOUCH --------------------

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
    socket?.on('updateStatus', (info: any, latestDead: string) => {
      console.log(info);
      setPlayerInfo(info);
    })
  })

  useEffect(() => {
    socket?.on('received', () => {
      setTarget('');
    })
  })

  useEffect(() => {
    socket?.on("targetVoted", (votedPlayerId: string) => {
      if (user?.data._id === id) {
        socket?.emit("goNight", id);
      }
    });
  }, [socket]);

  useEffect(() => {
    socket?.on("targetKilled", (votedPlayerId: string) => {
      if (user?.data._id === id) {
        socket?.emit("goCheck", id);
      }
    });
  },[socket]);

  useEffect(() => {
    socket?.on("votingTimer", (newTimer: number) => {
      setTimer(newTimer);
      changeMode("day");
      setNight(false);
      setCanVote(true);
    });
  });

  useEffect(() => {
    console.log(target);
    const handleTarget = () => {
      if (canVote) {
        setCanVote(false);
        console.log(target);
        socket?.emit("dayVote", id, target);
      }
    };

    socket?.on("votingEnded", () => {
      handleTarget();
      setTimer(null);
    });
  }, [target]);

  // werewolf

  useEffect(() => {
    socket?.on("killingTimer", (newTimer: number) => {
      setTimer(newTimer);
      changeMode("night");
      setNight(true);
      setCanKill(true);
    });
  });

  useEffect(() => {
    console.log(target);
    const handleTarget = () => {
      if (canKill) {
        setCanKill(false);
        console.log(target);
        socket?.emit("nightVote", id, target);
      }
    };

    socket?.on("killingEnded", () => {
      handleTarget();
      setTimer(null);
    });
  }, [target]);

  // seer
  useEffect(() => {
    socket?.on("checkingTimer", (newTimer: number) => {
      setTimer(newTimer);
      changeMode("night");
      setNight(true);
      setCanCheck(true);
    });
  });

  useEffect(() => {
    console.log(target);
    const handleTarget = () => {
      if (canCheck) {
        setCanCheck(false);
        console.log(target);
        socket?.emit("seerSelected", id, target);
      }
    };

    socket?.on("checkingEnded", () => {
      handleTarget();
      setTimer(null);
    });
  }, [target]);

  useEffect(() => {
    socket?.on("seerResult", (id: string, role: string) => {
      let name;
      players?.forEach((player) => {
        if (player.userId === id && role !== "seer dead") {
          name = player.username;
          alert(`player ${name} has a role of ${role}`);
        }
      });
      if (user?.data._id === id) {
        socket?.emit("goDay", id);
      }
    });
  },[socket]);

  useEffect(() => {
    socket?.on('villagerWin', () => {
      alert('villager wins')
    })
  }, [socket])

  useEffect(() => {
    socket?.on('werewolfWin', () => {
      alert('werewolf wins')
    })
  }, [socket])

  // useEffect(() => {
  //   console.log(target);
  // }, [target])

  const handleReceivedValue = (uid: string) => {
    setTarget(uid);
  };

  // ---------------- DONT EVER DARE TOUCH --------------------

  return (
    <div className="w-3/4 flex flex-col justify-center items-center gap-y-12">
      <div className="flex flex-row justify-center gap-x-24 w-full items-center">
        {players && playerInfo && total >= 1 ? (
          <GamePlayerIcon
            name={players[0]}
            info={playerInfo}
            img={""}
            isNight={isNight}
            handler={handleReceivedValue}
          />
        ) : (
          <EmptyGameIcon />
        )}
        {players && playerInfo && total >= 2 ? (
          <GamePlayerIcon
            name={players[1]}
            info={playerInfo}
            img={""}
            isNight={isNight}
            handler={handleReceivedValue}
          />
        ) : (
          <EmptyGameIcon />
        )}
      </div>
      <div className="flex flex-row justify-center items-center w-full">
        <div className="flex flex-col items-center gap-y-24">
          {players && playerInfo && total >= 3 ? (
            <GamePlayerIcon
              name={players[2]}
              info={playerInfo}
              img={""}
              isNight={isNight}
              handler={handleReceivedValue}
            />
          ) : (
            <EmptyGameIcon />
          )}
          {players && playerInfo && total >= 4 ? (
            <GamePlayerIcon
              name={players[3]}
              info={playerInfo}
              img={""}
              isNight={isNight}
              handler={handleReceivedValue}
            />
          ) : (
            <EmptyGameIcon />
          )}
        </div>
        <Image
          src="/img/lobby/campfire.svg"
          alt="campfire"
          width={500}
          height={358}
        />
        <div className="flex flex-col items-center gap-y-24">
          {players && playerInfo && total >= 5 ? (
            <GamePlayerIcon
              name={players[4]}
              info={playerInfo}
              img={""}
              isNight={isNight}
              handler={handleReceivedValue}
            />
          ) : (
            <EmptyGameIcon />
          )}
          {players && playerInfo && total >= 6 ? (
            <GamePlayerIcon
              name={players[5]}
              info={playerInfo}
              img={""}
              isNight={isNight}
              handler={handleReceivedValue}
            />
          ) : (
            <EmptyGameIcon />
          )}
        </div>
      </div>
      <div className="flex flex-row justify-center gap-x-24 w-full items-center">
        {players && playerInfo && total >= 7 ? (
          <GamePlayerIcon
            name={players[6]}
            info={playerInfo}
            img={""}
            isNight={isNight}
            handler={handleReceivedValue}
          />
        ) : (
          <EmptyGameIcon />
        )}
        {players && playerInfo && total >= 8 ? (
          <GamePlayerIcon
            name={players[7]}
            info={playerInfo}
            img={""}
            isNight={isNight}
            handler={handleReceivedValue}
          />
        ) : (
          <EmptyGameIcon />
        )}
      </div>
    </div>
  );
}
