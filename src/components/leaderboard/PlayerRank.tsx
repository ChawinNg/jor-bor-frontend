import PlayerScore from "@/models/PlayerData";
import PlayerCard from "./PlayerCard";

export default function PlayerRank() {
  const players = [
    ["Masato", "999", "0"],
    ["Masato", "998", "0"],
    ["Masato", "997", "0"],
    ["Masato", "996", "0"],
    ["Masato", "995", "1"],
    ["Masato", "994", "0"],
    ["Masato", "993", "0"],
    ["Masato", "993", "0"],
    ["Masato", "993", "0"],
    ["Masato", "993", "0"],
  ];
  return (
    <div className="flex flex-col w-1/3 h-[45%] overflow-auto gap-y-5 px-4">
      {players.map((item, index) => (
        <PlayerCard
          rank={index + 1}
          name={item[0]}
          score={item[1]}
          me={item[2]}
          key={index}
        />
      ))}
    </div>
  );
}
