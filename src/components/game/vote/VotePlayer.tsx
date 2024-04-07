export default function VotePlayer({ setKill }: { setKill: Function }) {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-[#1A1A1D] bg-opacity-80 text-4xl font-bold text-white select-none cursor-default">
      <div className="flex flex-col justify-center items-center h-3/4 w-3/5 bg-white rounded-xl gap-y-36 border-4 border-ui-red">
        <div className="text-black">Do you want to vote for “Player 1”</div>
        <div className="flex flex-row gap-x-10 text-xl font-normal w-full justify-center items-center">
          <button
            className="bg-white w-1/5 py-3 text-black rounded-xl border-1 border-ui-red"
            onClick={() => setKill(false)}
          >
            Skip
          </button>
          <button
            className="bg-ui-red w-1/5 py-3 rounded-xl"
            onClick={() => setKill(false)}
          >
            Kill
          </button>
        </div>
      </div>
    </div>
  );
}
