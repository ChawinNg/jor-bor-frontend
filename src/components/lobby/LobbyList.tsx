import LobbyCard from "./LobbyCard";

export default function LobbyList() {
  const players = [
    ["Masato", "999", "1"],
    ["Masato", "998", "5"],
    ["Masato", "997", "8"],
    ["Masato", "996", "2"],
    ["Masato", "995", "6"],
    ["Masato", "994", "7"],
    ["Masato", "993", "6"],
    ["Masato", "993", "1"],
    ["Masato", "993", "2"],
    ["Masato", "993", "7"],
  ];
  return (
    <div className="flex flex-col w-1/3 h-[48%] overflow-auto gap-y-5 px-4">
      {players.map((item, index) => (
        <LobbyCard name={item[0]} key={index} players={item[2]} />
      ))}
    </div>
  );
}
