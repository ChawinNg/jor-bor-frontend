import PlayerScore from "@/models/PlayerData";
import FriendCard from "./FriendCard";

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
  return (
    <div className="flex flex-col w-1/3 h-[48%] overflow-auto gap-y-5">
      {players.map((item, index) => (
        <FriendCard status={item[2]} name={item[0]} key={index} />
      ))}
    </div>
  );
}
