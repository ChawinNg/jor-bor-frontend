import PlayerRank from "@/components/leaderboard/PlayerRank";

export default function Leaderboard() {
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-y-16">
      <div className="text-4xl font-semibold">Leaderboard</div>
      <PlayerRank />
    </div>
  );
}
