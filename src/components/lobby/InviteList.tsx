import InviteCard from "./InviteCard";

export default function InviteList({
  players,
  inviteList,
  max,
  code,
  lobby,
}: {
  players: any[];
  inviteList: any[];
  max: number;
  code: string | null;
  lobby: string;
}) {
  return (
    <div className="flex flex-col h-3/5 bg-black gap-x-3 gap-y-8  justify-center items-center px-4 py-8 rounded-xl">
      {code && <div className="font-semibold text-2xl">Lobby Code: {code}</div>}
      {code && <div className="font-semibold text-2xl">Lobby Code: {code}</div>}
      <div className="flex flex-col w-full h-full  overflow-auto gap-y-5 px-4">
        {inviteList &&
          inviteList.map((item, index) => (
            <InviteCard
              name={item.username}
              code={code}
              lobby={lobby}
              key={index}
            />
          ))}
      </div>
      {players && (
        <div className="font-semibold text-2xl">
          {players.length}/{max} Players
        </div>
      )}
      {players && (
        <div className="font-semibold text-2xl">
          {players.length}/{max} Players
        </div>
      )}
    </div>
  );
}
