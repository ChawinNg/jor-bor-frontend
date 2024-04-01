export default function PlayerCard({
  rank,
  name,
  score,
  me,
}: {
  rank: number;
  name: string;
  score: string;
  me: string;
}) {
  return (
    <div
      className={`flex flex-row w-full  py-4 justify-between rounded-lg text-2xl font-semibold  ${
        me == "0" ? "bg-black" : "bg-ui-red"
      }`}
    >
      <div className="px-8">{rank}</div>
      <div className="w-full text-left">{name}</div>
      <div className="px-8">{score}</div>
    </div>
  );
}
