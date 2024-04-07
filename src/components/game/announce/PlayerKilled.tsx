export default function PlayerKill({ setKill }: { setKill: Function }) {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-[#1A1A1D] bg-opacity-80 text-4xl font-bold text-white select-none cursor-default">
      <div
        onClick={() => {
          setKill(false);
        }}
        className="flex flex-col justify-center items-center h-1/4 w-full bg-white gap-y-36 cursor-pointer"
      >
        <div className="text-black">player 1 is killed</div>
      </div>
    </div>
  );
}
