export default function SeeRole({
  setSee,
  role,
}: {
  setSee: Function;
  role: string;
}) {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-[#1A1A1D] bg-opacity-80 text-4xl font-bold text-white select-none">
      <div
        className={`flex flex-col justify-center items-center h-3/4 w-3/5 rounded-xl gap-y-36 ${
          role == "werewolf" && "bg-ui-accent"
        } ${role == "villager" && "bg-ui-red"}`}
      >
        <div>player 1 is a {role}</div>
        <div className="flex flex-row gap-x-10 text-xl font-normal w-full justify-center items-center">
          <button
            className="bg-white w-1/5 py-3 text-black rounded-xl"
            onClick={() => setSee(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
