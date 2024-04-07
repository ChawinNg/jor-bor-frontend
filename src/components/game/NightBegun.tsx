export default function NightBegun({ setNight }: { setNight: Function }) {
  return (
    <div
      className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-[#1A1A1D] bg-opacity-80 text-6xl font-bold text-white select-none"
      onClick={() => {
        setNight(false);
      }}
    >
      <div>The night has begun</div>
    </div>
  );
}
