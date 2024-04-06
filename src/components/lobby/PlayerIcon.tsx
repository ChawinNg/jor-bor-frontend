import Image from "next/image";

export default function PlayerIcon({
  name,
  img,
  ready,
}: {
  name: string;
  img: string;
  ready: boolean;
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-y-2">
      <div
        className={`relative flex aspect-square w-24 items-center justify-center overflow-hidden rounded-full bg-ui-red ${
          ready ? "border-8 border-white" : ""
        }`}
      >
        <Image
          src="/img/home/logo.svg"
          alt={"accountMenu"}
          draggable={false}
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div>{name}</div>
    </div>
  );
}
