import Link from "next/link";
import LobbyCard from "./LobbyCard";
import { useEffect, useState } from "react";
import getAllLobbies from "@/services/lobbies/getAllLobbies";
import joinLobby from "@/services/lobbies/joinLobby";
import { useSocket } from "@/contexts/SocketProvider";

export default function LobbyList() {
  // const players = [
  //   ["Masato", "999", "1"],
  //   ["Masato", "998", "5"],
  //   ["Masato", "997", "8"],
  //   ["Masato", "996", "2"],
  //   ["Masato", "995", "6"],
  //   ["Masato", "994", "7"],
  //   ["Masato", "993", "6"],
  //   ["Masato", "993", "1"],
  //   ["Masato", "993", "2"],
  //   ["Masato", "993", "7"],
  // ];

  const [lobbies, setLobbies] = useState<Array<any> | null>(null);

  const { socket, setSocket } = useSocket();

  useEffect(() => {
    const fetchLobbies = async () => {
      const data = await getAllLobbies();
      console.log(data);
      setLobbies(data);
    }
    fetchLobbies();
  }, [])

  const handlePost = async (lobbyId: string) => {
    const response = await joinLobby(lobbyId);
    console.log(response);
    // socket.emit("joinLobby", lobbyId);
  }
  
  return (
    <div className="flex flex-col w-1/3 h-1/2 overflow-auto gap-y-5 px-4">
      {/* {players.map((item, index) => (
        <Link href={"/lobbies/" + item[0]} key={index}>
          <LobbyCard name={item[0]} players={item[2]} />
        </Link>
      ))} */}
      {lobbies && lobbies.map((item, index) => (
        <Link 
          href={`/lobbies/${item.id}`} 
          key={index}
          onClick={() => {
            handlePost(item.id);
          }}
        >
          <LobbyCard name={item.name} players={item.players.length} maxPlayers={item.max_player}/>
        </Link>
      ))}
    </div>
  );
}
