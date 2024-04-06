import Image from "next/image";

export default function EmptyPlayerIcon() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-2">
      <div
        className={`relative flex aspect-square w-24 items-center justify-center overflow-hidden rounded-full bg-white`}
      ></div>
      <div>Waiting . . .</div>
    </div>
  );
}
