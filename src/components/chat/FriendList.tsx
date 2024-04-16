import PlayerScore from "@/models/PlayerData";
import FriendCard from "./FriendCard";
import { useEffect, useState } from "react";
import { getAllFriends } from "@/services/getFriends";

export default function FriendList() {
  const players = [
    ["Masato", "999", "Online"],
    ["Masato", "998", "Online"],
    ["Masato", "997", "Offline"],
    ["Masato", "996", "Offline"],
    ["Masato", "995", "Online"],
    ["Masato", "994", "Offline"],
    ["Masato", "993", "Online"],
    ["Masato", "993", "Offline"],
    ["Masato", "993", "Offline"],
    ["Masato", "993", "Offline"],
  ];

  const [FriendList, setFriendList] = useState<string[][]>();

  async function fetchFriendsList() {
    const data = await getAllFriends();
    console.log(data);
    let friends: string[][] = [];
    if (data != undefined) {
      data.map((item: any, index: any) => {
        friends.push([item.name, item.id, item.players.length]);
      });
      setFriendList(friends);
    }
  }
  useEffect(() => {
    fetchFriendsList();
  }, []);

  return (
    <div className="flex flex-col w-1/3 h-[48%] overflow-auto gap-y-5 px-4">
      {players.map((item, index) => (
        <FriendCard status={item[2]} name={item[0]} key={index} />
      ))}
      {/* {FriendList?.map((item, index) => (
        <FriendCard status={item[2]} name={item[0]} key={index} />
      ))} */}
    </div>
  );
}
