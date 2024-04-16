import Link from "next/link";
import LobbyCard from "./LobbyCard";
import getAllLobbies from "@/services/getAllLobbies";
import { useEffect, useState } from "react";
import { set } from "mongoose";
import { joinLobby } from "@/services/manageLobby";

export default function LobbyList() {
  const [lobbyList, setLobbyList] = useState<string[][]>();

  async function fetchLobbies() {
    const data = await getAllLobbies();
    console.log(data);
    let lobby: string[][] = [];
    data.map((item: any, index: any) => {
      lobby.push([item.name, item.id, item.players.length]);
    });
    setLobbyList(lobby);
  }
  useEffect(() => {
    fetchLobbies();
  }, []);

  return (
    <div className="flex flex-col w-1/3 h-1/2 overflow-auto gap-y-5 px-4">
      {lobbyList?.map((item, index) => (
        <Link href={"/lobbies/" + item[0]} key={index}>
          <LobbyCard name={item[0]} players={item[2]} lobbyId={item[1]} />
        </Link>
      ))}
    </div>
  );
}
