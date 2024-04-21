import InviteCard from "./InviteCard";

export default function InviteList({ players, max, code }: { players: any[], max: number, code: string | null }) {
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
  return (
    <div className="flex flex-col h-3/5 bg-black gap-x-3 gap-y-8  justify-center items-center px-4 py-8 rounded-xl">
      {code && (
        <div className="font-semibold text-2xl">Lobby Code: {code}</div>
      )}
      <div className="flex flex-col w-full h-full  overflow-auto gap-y-5 px-4">
        {players && players.map((item, index) => (
          <InviteCard name={item.username} key={index} />
        ))}
      </div>
      {players &&
        <div className="font-semibold text-2xl">{players.length}/{max} Players</div>
      }
    </div>
  );
}
